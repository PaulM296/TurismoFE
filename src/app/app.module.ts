import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ContainerComponent} from "./Container/container.component";
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { QuestionWindowComponent } from './question-window/question-window.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavigationComponent,
    HeaderComponent,
    NotificationComponent,
    QuestionWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
