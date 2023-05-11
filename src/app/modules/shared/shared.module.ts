import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelViewComponent } from './tabel-view/tabel-view.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    TabelViewComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [TabelViewComponent,NavbarComponent]
  
})
export class SharedModule { }
