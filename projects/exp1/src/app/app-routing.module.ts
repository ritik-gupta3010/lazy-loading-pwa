import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exp1Comp1Component } from './exp1-comp1/exp1-comp1.component';
import { Exp1Comp2Component } from './exp1-comp2/exp1-comp2.component';
const routes: Routes = [
  { path: '',component:Exp1Comp1Component},
  { path: 'comp1',component:Exp1Comp1Component},
  { path: 'comp2',component:Exp1Comp2Component},
];
console.log("exp1 routing");
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
