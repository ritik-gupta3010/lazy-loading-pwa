import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import {App2SharedModule} from "../../projects/exp2/src/app/app.module";
const routes: Routes = [
  { path: 'comp1',component:Comp1Component},
  { path: 'comp2',component:Comp2Component},
  { path: 'mod', loadChildren: () =>  import('./moduleinmultipleapps/moduleinmultipleapps.module').then(m => m.ModuleinmultipleappsModule) }, 
  { path: 'exp1', loadChildren: () => import('../../projects/exp1/src/app/app.module').then(m => m.AppModule) },//for child so no need to BrowserModule
  { path: 'exp2', loadChildren: () => import('../../projects/exp2/src/app/app.module').then(m => m.AppModule) },//for root 
  /***
   * If you are using multiple modules, use Browser module only once in your app module or some 
   * custom module and use CommonModule from @angular/common in custom modules.
   * 
   * 
   * 
   * 
   * exp1 project (forchild) is correct as it load module on demand \
   * exp2 load it initially so not corrected
  ***/
];
console.log("MultipleApps routing");
@NgModule({
  imports: [RouterModule.forRoot(routes),
    App2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
