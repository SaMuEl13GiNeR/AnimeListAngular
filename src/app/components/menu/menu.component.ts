import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  criteri: string = '';
  
  constructor(private router: Router, private login: LoginService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.router.navigate(['/animes', this.criteri]);
  }

  logout(){
    this.login.logout();
  }

}
