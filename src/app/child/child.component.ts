import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Input} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  parentData:string;
  

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i in changes){
      let change = changes[i];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.currentValue);
      console.log(`Property name : ${i}, current value: ${current}, previous value : ${previous}`);
    }
  }

  ngOnInit() {
  }

}
