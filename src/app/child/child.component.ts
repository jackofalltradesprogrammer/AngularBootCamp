import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['receivedDataFromParent'],
  outputs:['childEvent1']
})
export class ChildComponent implements OnInit {

  // @Input()
  receivedDataFromParent:string;
  childEvent1 = new EventEmitter<string>();

  constructor() { }

  onChange(){
    this.childEvent1.emit("Hello from Child");
  }

  ngOnInit() {
  }

}
