import { Component } from '@angular/core';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.css']
})
export class SelectDateComponent {
  constructor(){}
  today = Date.now();
  tomorrow = new Date((new Date()).getTime() + (1 * 86400000))
  todayAddTwoDays = new Date((new Date()).getTime() + (2 * 86400000))
  todayAddThreeDays = new Date((new Date()).getTime() + (3 * 86400000))
  todayAddFourDays= new Date((new Date()).getTime() + (4 * 86400000))
  todayAddFiveDays = new Date((new Date()).getTime() + (5 * 86400000)) 
  todayAddSixDays = new Date((new Date()).getTime() + (5 * 86400000)) 
}
