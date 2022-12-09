import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {TestRouteComponent} from './test-route/test-route.component';
import { SelectDateComponent } from './select-date/select-date.component'
import { MovieViewComponent } from './movie-view/movie-view.component';
import { TruncatePipe } from './movie-view/truncate.pipe';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TestRouteComponent,
    SelectDateComponent,
    MovieViewComponent,
    TruncatePipe,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
