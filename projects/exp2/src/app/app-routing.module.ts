import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exp2Comp1Component } from './exp2-comp1/exp2-comp1.component';
import { Exp2Comp2Component } from './exp2-comp2/exp2-comp2.component';
console.log("exp2 routing");
const routes: Routes = [
   { path: 'exp2/comp1',component:Exp2Comp1Component},
    { path: 'exp2/comp2',component:Exp2Comp2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
