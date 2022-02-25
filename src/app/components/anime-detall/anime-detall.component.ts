import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAnime } from 'src/app/interfaces/i-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-detall',
  templateUrl: './anime-detall.component.html',
  styleUrls: ['./anime-detall.component.css']
})
export class AnimeDetallComponent implements OnInit {
  id = "";
  @Input() anime: IAnime | undefined;
  
  constructor(private aService: AnimeService, private rutes: ActivatedRoute ) { }

  ngOnInit(): void {
    this.anime = this.anime ? this.anime : {
        airing: false,
        end_date: "",
        episodes: 0,
        image_url: "",
        mal_id: "",
        members: 0,
        rated: "",
        score: "",
        start_date: "",
        synopsis: "",
        title: "",
        type: "",
        url: "",
        orden: 0
    };

    this.rutes.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      
      this.aService.getAnime(this.id).subscribe(a=>{
        console.log(this.anime);
        
        this.anime = a;
      });
    });

  }

}
