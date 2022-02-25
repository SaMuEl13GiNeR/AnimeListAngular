import { Component, Input, OnInit, Output } from '@angular/core';
import { IAnime } from '../../interfaces/i-anime';

@Component({
  selector: '[app-anime]',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  @Input() anime: IAnime | undefined;

  constructor() { }

  ngOnInit(): void {

    // console.log(this.anime);
    
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




    };

}
