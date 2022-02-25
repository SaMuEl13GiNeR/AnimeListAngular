import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistreComponent} from './components/registre/registre.component';
import {AnimeListComponent} from './components/anime-list/anime-list.component';
import {MangaListComponent} from './components/manga-list/manga-list.component';
import {HomeComponent} from './components/home/home.component';
import { AnimeDetallComponent } from './components/anime-detall/anime-detall.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registre', component: RegistreComponent},
  {path: 'listaAnime', component: AnimeListComponent},
  {path: 'anime-detall/:id', component: AnimeDetallComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listaManga', component: MangaListComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }