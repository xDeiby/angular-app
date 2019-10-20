import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Route, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { UserComponent } from './user/user.component';
import {DataService} from './data.service';

const routes : Route[] = [
  {path: 'Form', component: MyappComponent},
  {path: '', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
