import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exp1Comp1Component } from './exp1-comp1/exp1-comp1.component';
import { Exp1Comp2Component } from './exp1-comp2/exp1-comp2.component';
console.log("exp1 module");
@NgModule({
  declarations: [
    AppComponent,
    Exp1Comp1Component,
    Exp1Comp2Component
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
