import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserR } from 'src/app/interfaces/i-user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  public nombre = '';
  public apellido = '';

  public username = '';
  public password = '';
  public rol = '';
  public id = '';

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    let user:UserR = { nombre: this.nombre, apellido: this.apellido, email: this.username, password: this.password, rol: this.rol, id: this.id};
    
    this.loginService.registre(user).subscribe({
      next: user=>{
       //  console.log(user);
        this.router.navigate(['/login']);
       },
      error: err=>{console.log(err)}
     });
  }

}
