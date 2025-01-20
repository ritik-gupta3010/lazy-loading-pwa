import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModComp1Component } from './mod-comp1/mod-comp1.component';

const routes: Routes = [
  { path: 'comp1',component:ModComp1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleinmultipleappsRoutingModule { }
