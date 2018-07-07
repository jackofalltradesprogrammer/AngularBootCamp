import { Component, OnInit } from '@angular/core';
import { Employee, IEmployee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  x = new Employee();
  employees: IEmployee[]=null;
  msg:string='';
  constructor(){
    this.employees = new Array<IEmployee>(
      {id:101, ename:'kiran', job:'Trainer', salary:5000},
      {id:102, ename:'Suhal', job:'Programmer', salary:5000},
      {id:103, ename:'Pavan', job:'Developer', salary:5000},
      {id:104, ename:'Jassy', job:'Trainer', salary:5000}
    );
    this.msg = 'Total Employee count is ' + this.employees.length;
  }
  selectRow(i){
    // Cloning Json object
    this.x = JSON.parse(JSON.stringify(this.employees[i]));
  }
  addRow(){
    this.employees.push(this.x);
    this.msg = 'Total Employee count is ' + this.employees.length;
    this.x=new Employee();
    alert("Row added succesfully");
  }
  editRow(id){
    for (var index in this.employees) {
      if(id == this.employees[index].id){
        this.employees[index] = this.x;
        this.x=new Employee();
         alert("Row Edit succesfully");
      }
    }
  }
  deleteRow(i){
    if(confirm("Are you sure?")){
      this.x=new Employee();
      this.employees.splice(i,1);
      this.msg = 'Total Employee count is ' + this.employees.length;
      alert("Row Deleted succesfully");
    }
  }

  ngOnInit() {
  }

}
