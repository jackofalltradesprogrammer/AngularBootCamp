import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-count',
  templateUrl: './person-count.component.html',
  styleUrls: ['./person-count.component.css'],
  inputs: ['allCount', 'maleCount', 'femaleCount'],
  outputs: ['childEvent1']
})
export class PersonCountComponent implements OnInit {

  allCount:number;
  maleCount:number;
  femaleCount:number;
  childEvent1:EventEmitter<string> = new EventEmitter<string>();
  count:string;
  constructor() { }

  onChange = function(){
    this.childEvent1.emit(this.count);
  }

  ngOnInit() {
  }
  

}
