import { NgModule,ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exp2Comp1Component } from './exp2-comp1/exp2-comp1.component';
import { Exp2Comp2Component } from './exp2-comp2/exp2-comp2.component';
console.log("exp2 module");
@NgModule({
  declarations: [
    AppComponent,
    Exp2Comp1Component,
    Exp2Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
@NgModule({})
export class App2SharedModule{
  static forRoot(): ModuleWithProviders<App2SharedModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
