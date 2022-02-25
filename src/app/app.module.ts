import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeComponent } from './components/anime/anime.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { HomeComponent } from './components/home/home.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeDetallComponent } from './components/anime-detall/anime-detall.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnimeListComponent,
    AnimeComponent,
    LoginComponent,
    RegistreComponent,
    HomeComponent,
    MangaListComponent,
    AnimeDetallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
