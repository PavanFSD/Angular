import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// AppComponent.ts
export class AppComponent {

  
  value:any = "hey"

  printValue(e:any){
    this.value = e.id;
    console.log(e.id);
  }


  
}
