import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: any[]=null;
  getEmployees(){
    this.employees = [
      {id:101, ename:'kiran', job:'Trainer', salary:5000},
      {id:101, ename:'Suhal', job:'Programmer', salary:5000},
      {id:101, ename:'Pavan', job:'Developer', salary:5000},
      {id:101, ename:'Jassy', job:'Trainer', salary:5000}
    ];
  }
  clearEmployees(){
    this.employees =null;
  }
}
