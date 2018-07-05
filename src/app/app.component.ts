import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string='';
  getMessage(){
    this.msg='hello';
  }
  getDate(){
    var d= new Date();
    this.msg = d.getDate() +"/"+(d.getMonth()) + "/" + d.getFullYear();

  }
}
