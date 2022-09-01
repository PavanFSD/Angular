import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-componenet',
  templateUrl: './child-componenet.component.html',
  styleUrls: ['./child-componenet.component.css']
})
export class ChildComponenetComponent implements OnInit {

  @Input()
  name:string;
  constructor() { }

  ngOnInit(): void {
  }

}
