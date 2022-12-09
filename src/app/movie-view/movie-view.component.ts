import { Component, EventEmitter, Input } from '@angular/core';
import {Movie} from '../movies-list/movies-list.component'
import { TruncatePipe } from './truncate.pipe';

 
@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})



export class MovieViewComponent {

  @Input() movie: Movie

 isFullBlown = false
  
 constructor(){

  }

 

 handleVisibiltyDescription(){
  this.isFullBlown = !this.isFullBlown

 }
}
