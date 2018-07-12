import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HelloService]
})
export class AppComponent {
  msg:string='';
  constructor(private _hs:HelloService){
    
  }
  getHelloMessageFromService(){
    this.msg = this._hs.getHelloMessage();
  }
}
  


