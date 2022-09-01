import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private _mobiles:TestServiceService) { }

  ngOnInit(): void {
  }
 mobilesData:any = this._mobiles.mobiles;
 getAPIData(){
  this._mobiles.getData();
 }
}
