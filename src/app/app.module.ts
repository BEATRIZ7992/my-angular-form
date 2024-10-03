import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // No más AppRoutingModule aquí
import { MyFormComponent } from './components/my-form/my-form.component';
import { MySuccessComponent } from './components/my-success/my-success.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MySuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
