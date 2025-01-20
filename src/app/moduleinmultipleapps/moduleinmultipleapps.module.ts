import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleinmultipleappsRoutingModule } from './moduleinmultipleapps-routing.module';
import { ModComp1Component } from './mod-comp1/mod-comp1.component';


@NgModule({
  declarations: [
    ModComp1Component
  ],
  imports: [
    CommonModule,
    ModuleinmultipleappsRoutingModule
  ]
})
export class ModuleinmultipleappsModule { }
