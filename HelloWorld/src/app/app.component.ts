import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// AppComponent.ts
export class AppComponent {
data = ["hyd","bnglr","chennai"]

 emp_data = [
  {"name":"Ram", "email":"ram@gmail.com", "age":23},
  {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},
  {"name":"John", "email":"john@gmail.com", "age":33},
  {"name":"Bob", "email":"bob32@gmail.com", "age":41}
  ]
  
}
