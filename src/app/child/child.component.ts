import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Input} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['parentData1', 'parentData2']
})
export class ChildComponent implements OnInit, OnChanges {

  
  parentData1:string;
  parentData2:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i in changes){
      let change = changes[i];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(`Property name : ${i}, current value: ${current}, previous value : ${previous}`);
    }
  }

  ngOnInit() {
  }

}
