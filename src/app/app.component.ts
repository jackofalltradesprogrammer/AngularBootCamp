import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string='';
  getSomething(something){
    var d= new Date();
    if (something == 'date'){
      this.msg = d.getDate() +"/"+(d.getMonth()) + "/" + d.getFullYear();
    }
    else if (something == 'time') {
      this.msg = d.getHours() +":"+(d.getMinutes()) + ":" + d.getSeconds();
    }
    else{
      this.msg='hello'; }
  }
  
}
