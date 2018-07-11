import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string='';
  onSubmit=function(){
    this.msg = "Form Submitted Successfully";
  }
  
}

