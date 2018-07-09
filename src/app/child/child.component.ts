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
  name1:string="";
  terms:boolean;

  constructor() { }

  onChange(){
    if (this.terms)
      this.childEvent1.emit("Thank you " + this.name1 + " for accepting terms");
    else
      this.childEvent1.emit(this.name1 + " Read terms and accept it");
  }

  ngOnInit() {
  }

}
