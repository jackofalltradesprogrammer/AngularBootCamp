import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  getHelloMessage(){
    return "Hello from servcie";
  }
  constructor() { }

}
