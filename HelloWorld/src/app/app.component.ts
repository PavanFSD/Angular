import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// AppComponent.ts
export class AppComponent {

  name = "pavan"
  lastname = "PATIL"
  title = "hi hello"
  amout = 2000;
  date_today:any = new Date();
  person = {
    name:"pavan",
    gender:"male"
  }
  percent = 0.98;
  company = "microsoft";


  
}
