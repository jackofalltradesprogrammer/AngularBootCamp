import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg1:string='';
  msg2:string='';
  onSubmit=function(obj){
    this.msg1 = 'Name is ' +obj.name.value;
    this.msg2= 'City is ' + obj.city.value;
  }
  
}

