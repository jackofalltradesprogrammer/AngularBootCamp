import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonCountComponent } from './person-count/person-count.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonCountComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
