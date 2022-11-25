import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {TestRouteComponent} from './test-route/test-route.component';
import { SelectDateComponent } from './select-date/select-date.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TestRouteComponent,
    SelectDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
