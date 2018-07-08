import { Component, OnInit } from '@angular/core';
import { PersonList, IPerson } from './person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList: IPerson[];
  constructor() { 
    this.personList = new Array<IPerson> (
      {id:1001, pname:'Harpreet', gender:'male', age:28 },
      {id:1002, pname:'Rajiv', gender:'male', age:23 },
      {id:1003, pname:'Maria', gender:'female', age:50 },
      {id:1004, pname:'David', gender:'male', age:16 }
    );

  }

  getAllCount(){
    return this.personList.length;
  }
  getMaleCount(){
    return this.personList.filter(x=>x.gender=='male').length;
  }
  getFemaleCount(){
    return this.personList.filter(x=>x.gender=='female').length;
  }

  ngOnInit() {
  }

}
