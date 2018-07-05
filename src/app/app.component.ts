import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  items: String[] =[];
  msg: string;
  display(p){
    if(p=="fruits"){
      this.items = ['grapes', 'mango', 'apple','strawberry', 'blueberry'];
      this.title = ' List of Vegetables'
      this.msg = 'Count of Vegetables ' + this.items.length;
    }
    else if (p=="vegetables"){
      this.items = ['potato', 'turnip', 'carrot', 'radish', 'brocolli'];
      this.title = ' List of Fruits'
      this.msg = 'Count of Fruits: ' + this.items.length;
    }
    
  }
    
}
