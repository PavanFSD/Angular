import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  name:String = "pavan";
  isdisabled : boolean = false;
  isActive:boolean=true;
  isapplyBG:boolean=true;
  activeClass:String='active';
}
