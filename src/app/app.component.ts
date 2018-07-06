import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x:any[]=null;
  employees: any[]=null;
  constructor(){
    this.employees = [
      {id:101, ename:'kiran', job:'Trainer', salary:5000},
      {id:102, ename:'Suhal', job:'Programmer', salary:5000},
      {id:103, ename:'Pavan', job:'Developer', salary:5000},
      {id:104, ename:'Jassy', job:'Trainer', salary:5000}
    ];
  }
  selectRow(i){
    this.x = this.employees[i];
  }
  
}
