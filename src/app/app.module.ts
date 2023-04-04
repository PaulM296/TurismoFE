import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import {ContainerComponent} from "./Container/container.component";
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RezultateComponent } from './rezultate/rezultate.component'

const routes: Routes = [
  {path: 'results', component: RezultateComponent},
  {path: '', component: ContainerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavigationComponent,
    HeaderComponent,
    NotificationComponent,
    QuestionsComponent,
    RezultateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
