import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleStyle= {
    "color":"BROWN",
     "text-align": "center"
  };
  termsStyle={};
  terms:string='';
  msg:string='';
  name:string='';
  check(){
    if (this.terms){
      this.msg=this.name +", Thanks for accepting terms";
      this.termsStyle={"color":"GREEN"};
    }
    else{
      this.msg=this.name +", Please read and accept terms";
      this.termsStyle={"color":"RED"};
    }
  }
}
  


