import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  
})
export class ParentComponent implements OnInit {
  txtParent1:string='';
  txtParent2:string='';
  constructor() { }

  ngOnInit() {
  }

}
