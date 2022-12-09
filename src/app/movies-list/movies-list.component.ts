import { Component } from '@angular/core';

export interface Movie {
  posterImg: string,
  isPremiere: boolean,
  title: string,
  type: string,
  time: number,
  age: string,
  description: string,
  seassionHours: string[],
  rate: number
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent {

  film:Movie[] = []
  
  ngOnInit() {
    fetch('http://localhost:3000/movies')
    .then((res) => res.json())
    .then((response) => {
      this.film = response
    })
  }

}
