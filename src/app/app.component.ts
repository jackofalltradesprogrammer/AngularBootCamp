import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  msg:string;
  terms: boolean;
 showGender(gender){
   if(this.terms && this.name){
    if (gender == "male")
      this.msg = "Hello Mr. " + this.name;
    else if (gender == "female")
      this.msg = "Hello Mrs. " + this.name;
   }
   else
    this.msg = "Please accept terms and input a name";

  }
  
}
