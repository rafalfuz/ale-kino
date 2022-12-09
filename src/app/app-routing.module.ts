import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import { FormComponent } from './form/form.component';
import { MovieViewComponent } from './movie-view/movie-view.component';


const routes: Routes = [
  
  {path: 'today', component: MovieViewComponent},
  {path: 'tomorrow', component: MovieViewComponent},
  {path: 'todayAddTwoDays', component: MovieViewComponent},
  {path: 'todayAddThreeDays', component: MovieViewComponent},
  {path: 'todayAddFourDays', component: MovieViewComponent},
  {path: 'todayAddFiveDays', component: MovieViewComponent},
  {path: 'todayAddSixDays', component: MovieViewComponent},
  
  {path: 'admin', component: MovieViewComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
