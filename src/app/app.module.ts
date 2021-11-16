import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './approuting.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, Step1Component, Step2Component, Step3Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
