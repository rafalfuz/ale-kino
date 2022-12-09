import { Component } from '@angular/core';
import { movieDatas } from 'src/assets/movieDatas';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  movieDatas = movieDatas

  isFullBlown = false

  handleVisibiltyDescription(){
   this.isFullBlown = !this.isFullBlown
  }
}
