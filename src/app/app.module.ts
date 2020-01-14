import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginModule } from './components/login/login.module';
import { MailGroupModule } from './components/mail-group/mail-group.module';
import { MaterialModule } from './shared/material/material.module';





@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule, BrowserAnimationsModule,
    AppRoutingModule, LoginModule, HttpClientModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule, FlexLayoutModule,
    MailGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
