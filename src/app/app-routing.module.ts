import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'' ,redirectTo:'main-module', pathMatch:'full'
  },
  { path:'main-module', loadChildren :() => import("./modules/main/main.module").then((m)=>m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
