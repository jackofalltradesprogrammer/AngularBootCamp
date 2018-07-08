import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['receivedDataFromParent']
})
export class ChildComponent implements OnInit {

  // @Input()
  receivedDataFromParent:string;

  constructor() { }

  ngOnInit() {
  }

}
