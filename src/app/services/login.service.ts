import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, Subject, BehaviorSubject, catchError, throwError, mergeMap } from 'rxjs';
import { User, UserR } from '../interfaces/i-user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userSubject = new Subject<User>();
  userRSubject = new Subject<UserR>();
  logued = new BehaviorSubject<boolean>(false);



  private loginURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYTWCeDdnPeK3TgrRUQvFwOSafYamulZg";
  private registerURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYTWCeDdnPeK3TgrRUQvFwOSafYamulZg"
  private url = `https://animelist-1f43f-default-rtdb.firebaseio.com/Usuarios`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
    // this.isLogged() ? this.logued.next(true) : this.logued.next(false);
  }

  localstorageLogin(idToken: string, expiresIn: string, localId: string){
    const now = new Date();
    const Token = { token: idToken, expiration: now.getTime() + parseInt(expiresIn) * 1000 }
    localStorage.setItem('idToken', JSON.stringify(Token));
    localStorage.setItem('localId', localId);
    this.logued.next(true);
  }


  login(data: User): Observable<User> {
    let datos = { ...data, returnSecureToken: true };
    return this.http.post<{ email: string, idToken: string, localId: string, expiresIn: string }>(this.loginURL, JSON.stringify(datos), this.httpOptions)
      .pipe(
        map(response => {
          this.userSubject.next(data);
          this.localstorageLogin(response.idToken,response.expiresIn, response.localId);
          console.log(data.email);
          
          return data;

        }),
        catchError((resp: HttpErrorResponse) => throwError(() => new Error(`Error de Login: ${resp.message}`)))
      );
  }

  registre(data: UserR): Observable<any> {
    let datos = { ...data, returnSecureToken: true };
    return this.http.post<{ email: string, idToken: string, localId: string, expiresIn: string }>(this.registerURL, JSON.stringify(datos), this.httpOptions)
      .pipe(
        mergeMap(response => {
          this.localstorageLogin(response.idToken,response.expiresIn,response.localId);
          this.createUser(data).subscribe();
          return JSON.stringify(datos);


          

        }),
        catchError((resp: HttpErrorResponse) => throwError(() => new Error(`Error de registre: ${resp.message}`)))
      );
  }

  createUser(data: UserR): Observable<any>{
    let newUser: any = {...data};
    newUser.id = localStorage.getItem('localId');
    console.log(JSON.stringify(newUser));
    
   console.log(localStorage.getItem('localId'));
   console.log(this.url + `/${ newUser.id}.json`);
   
    return this.http.put<UserR>(this.url + `/${ newUser.id}.json` , JSON.stringify(newUser));
    
  }

  logout() {
    console.log(localStorage.getItem('localId'));
    localStorage.removeItem('idToken');
    localStorage.removeItem('localId');
    this.logued.next(false);
    console.log(localStorage.getItem('localId'));
    
  }

  getToken():string|null{
    const idToken = localStorage.getItem('idToken');
    if (idToken) {
      const token: { token: string, expiration: number } = JSON.parse(idToken);
      return token.token;
    }
    else {
      return null;
    }

    

  }

}
