import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n1:number;
  msg:string;
  calcSquare(){
    this.msg = `Square of ${this.n1} is ${this.n1*this.n1}`;
    

  }
  
}
