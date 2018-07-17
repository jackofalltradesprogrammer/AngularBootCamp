import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  employees=[
    {id:1,ename:"Kiran", job:"Student", salary:"5000"},
    {id:2,ename:"Happy", job:"Developer", salary:"5000"},
    {id:3,ename:"Pawan", job:"Trainer", salary:"5000"},
    {id:4,ename:"Misty", job:"Trainer", salary:"5000"},
  ];
  onSubmit(obj){
    this.employees.push(obj);
  }
}
  


