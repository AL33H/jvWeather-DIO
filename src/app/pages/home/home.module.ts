import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule
  ]
})
export class HomeModule { }
