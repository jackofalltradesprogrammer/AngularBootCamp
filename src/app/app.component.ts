import { Component } from '@angular/core';
// import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[HelloService]
})
export class AppComponent {
  students:any[];
  constructor(){
    this.students = [
      {id:1001,sname:'Happy',course:'Angular',gender:'Male',fee:800},
      {id:1002,sname:'Kiran',course:'ASP.net',gender:'Male',fee:1800},
      {id:1003,sname:'Sona',course:'Chasmish',gender:'Female',fee:8300},
      {id:1004,sname:'Rajiv',course:'Angular',gender:'Male',fee:2800}
    ];
  }
  // msg:string='';
  // constructor(private _hs:HelloService){
    
  // }
  // getHelloMessageFromService(){
  //   this.msg = this._hs.getHelloMessage();
  // }
}
  


