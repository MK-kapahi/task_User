import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path:'' ,redirectTo:'main', pathMatch:'full'
  },
  { path : 'main' , component : FormComponent}
];

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MainModule { }
