import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  solution: number[] = [24,7,365];
  msg:string;
  answers: number[] = [0,0,0];
  score:number = 0;
  name:string;
 showScore(){
   if (this.answers[0] == this.solution[0])
   this.score+=1;
   if (this.answers[1] == this.solution[1])
   this.score+=1;
   if (this.answers[2] == this.solution[2])
   this.score+=1;

   if (this.score == 3)
    this.msg = "Passed! " + this.name + "'syour score is " + this.score;
   else
   this.msg = "Failed! " + this.name + "'s your score is " + this.score;


    

  }
  
}
