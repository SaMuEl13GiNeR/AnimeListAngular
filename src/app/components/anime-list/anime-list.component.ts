import { Component, OnInit } from '@angular/core';
import { IAnime } from '../../interfaces/i-anime';
import { AnimeService } from '../../services/anime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  title = 'AnimeList';
  animes: IAnime[] = [];
  animes_original: IAnime[] = [];
  
  filtre='';

  constructor(private aService: AnimeService, private rutes: ActivatedRoute ) { }

  ngOnInit(): void {
    this.aService.getAnimes().subscribe(a=>{
      this.animes = a;
      this.animes_original = a;

      this.rutes.params.subscribe( params => {
        if ('criteri' in params){
  
          this.animes = this.animes_original.filter(d=>
             d.title.includes(params['criteri'])
          );
        }
      })

    });
  }

  filtrar = ()=>{
    this.animes = this.animes_original.filter(d=> d.title.includes(this.filtre))
  }

  ordenar = (criteri:string)=>{
    if(criteri=='title'){
      this.animes = this.animes.sort((a,b)=>{return a.title > b.title ? 1: -1})
    }
    if(criteri=='mal_id'){
      this.animes = this.animes.sort((a,b)=>{return a.mal_id > b.mal_id ? 1: -1})
    }
  }

}
