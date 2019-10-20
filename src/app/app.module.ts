import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Route, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { UserComponent } from './user/user.component';
import {DataService} from './data.service';
import { AboutComponent } from './about/about.component';

const routes : Route[] = [
  {path: 'Form', component: MyappComponent},
  {path: '', component: AppComponent},
  {path: 'About', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    UserComponent,
    AboutComponent
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
