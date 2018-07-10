import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  
})
export class ParentComponent implements OnInit, OnDestroy {
  
  txtParent1:string='';
  txtParent2:string='';
  constructor() { }

  ngOnInit() {
      //code to get data from the data source
    console.log("Component loaded successfully");
  }
  ngOnDestroy(): void {
      // code while destroying object
    console.log("Component unloaded successfully");
  }

}
