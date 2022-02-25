import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map, Subject, mergeMap } from 'rxjs';
import { IAnime } from '../interfaces/i-anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  animeSubject = new Subject<IAnime[]>();

  url = "https://animelist-1f43f-default-rtdb.firebaseio.com/Animes";

  private httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient) { }



  getAnimes():Observable<IAnime[]>{
    const obsAnimes = this.http.get<{[key: string]: IAnime}>(this.url+".json")
    .pipe(
      map( sObjecte => Object.entries(sObjecte)),
      map( sArray => sArray.map(s=> { return s[1] } ) ) )
    .subscribe(a => this.animeSubject.next(a));
     return this.animeSubject;
  }

  getAnime(id:string):Observable<IAnime>{
    return this.http.get<IAnime>(`${this.url}/${id}.json`)
    .pipe(map(s=>{ s.mal_id = id; return s} ))
  }
}
