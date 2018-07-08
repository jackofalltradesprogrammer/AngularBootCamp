import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-count',
  templateUrl: './person-count.component.html',
  styleUrls: ['./person-count.component.css'],
  inputs: ['allCount', 'maleCount', 'femaleCount']
})
export class PersonCountComponent implements OnInit {

  allCount:number;
  maleCount:number;
  femaleCount:number;
  constructor() { }

  ngOnInit() {
  }
  

}
