import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x:any[]=null;
  employees: any[]=null;
  r:number=0;
  msg:string=null;
  constructor(){
    this.employees = [
      {id:101, ename:'Kiran', job:'Trainer', salary:5000},
      {id:102, ename:'Suhal', job:'Programmer', salary:5000},
      {id:103, ename:'Pavan', job:'Developer', salary:5000},
      {id:104, ename:'Jassy', job:'Trainer', salary:5000}
    ];
  }
  firstRow(){
    this.r=0;
    this.x = this.employees[this.r];
  }
  nextRow(){
    if(this.r < this.employees.length-1)
      this.r+=1;
    else 
      alert ("No more Next records");
    this.x = this.employees[this.r];
  }
  prevRow(){
    if(this.r > 0)
      this.r-=1;
    else 
      alert ("No more Previous records");
    this.x = this.employees[this.r];
  }
  lastRow(){
    this.r=this.employees.length-1;
    this.x = this.employees[this.r];
  }

}
