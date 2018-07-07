import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x:any = {};
  employees: any[]=[];
  msg:string='';
  constructor(){
    this.employees = [
      {id:101, ename:'kiran', job:'Trainer', salary:5000},
      {id:102, ename:'Suhal', job:'Programmer', salary:5000},
      {id:103, ename:'Pavan', job:'Developer', salary:5000},
      {id:104, ename:'Jassy', job:'Trainer', salary:5000}
    ];
    this.msg = 'Total Employee count is ' + this.employees.length;
  }
  selectRow(i){
    // Cloning Json object
    this.x = JSON.parse(JSON.stringify(this.employees[i]));
  }
  addRow(){
    this.employees.push(this.x);
    this.msg = 'Total Employee count is ' + this.employees.length;
    this.x = {};
    alert("Row added succesfully");
  }
  editRow(id){
    for (var index in this.employees) {
      if(id == this.employees[index].id){
        this.employees[index] = this.x;
        this.x = {};
         alert("Row Edit succesfully");
      }
    }
  }
  deleteRow(i){
    if(confirm("Are you sure?")){
      this.x={};
      this.employees.splice(i);
      this.msg = 'Total Employee count is ' + this.employees.length;
      alert("Row Deleted succesfully");
    }
  }
  
}
