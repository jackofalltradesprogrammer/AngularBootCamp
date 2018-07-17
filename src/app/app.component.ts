import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  uname:string="happy";
  pwd:string="happy";
  msg:string="";
  titleStyle:string="";
  onSubmit(obj){
    console.log(obj.txtPwd);
    if(obj.txtUname == this.uname && obj.txtPwd == this.pwd){
      this.msg = "User is Authenticated";
      this.titleStyle="GREEN";
    }
    else {
      this.msg = "User is not Authenticated";
      this.titleStyle="RED";
    }

  }
}
  


