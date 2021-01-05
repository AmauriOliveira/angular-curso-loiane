import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class DataFormModule { }
