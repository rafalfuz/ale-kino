import { Component, Input } from '@angular/core';
import { movieDatas} from '../../assets/movieDatas';

import { TruncatePipe } from './truncate.pipe';

 
@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})


export class MovieViewComponent {
 movieDatas = movieDatas
}
