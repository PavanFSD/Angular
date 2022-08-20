import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// AppComponent.ts
export class AppComponent {
 
  x:number=0;
 name:String="";
  increment(){
    
this.x = this.x+1;
  }

  decrement(){
    this.x = this.x-1;
      }

      changeName(evn:any){
        console.log(evn);
        console.log(evn.target);
        console.log(evn.target.value);
        this.name = evn.target.value;
      }
}
