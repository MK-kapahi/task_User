import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelViewComponent } from './tabel-view/tabel-view.component';



@NgModule({
  declarations: [
    TabelViewComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [TabelViewComponent]
  
})
export class SharedModule { }
