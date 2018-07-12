import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
employees:any[];
  constructor() {
    this.employees=[
      {id:101, ename:"Kiran", job:"Trainer", salary:5500},
      {id:102, ename:"Sunil", job:"Developer", salary:5300},
      {id:103, ename:"Pavan", job:"Trainer", salary:5600}
    ];
   }
  
}
