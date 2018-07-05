import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  t1:string;
  msg:string;
  display(name){
    
    var names = this.t1.split(" ");
    if(name == "firstName")
    this.msg  = 'Hello ' + names[0];
    else if (name == "lastName")
    this.msg  = 'Hello ' + names[1];
    else
    this.msg  = 'Hello ' + this.t1;

  }
  
}
