import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  items: String[] =[];
  constructor(){
    this.items = ['pencil', 'pen', 'eraser','staples', 'glue'];
  }
    
}
