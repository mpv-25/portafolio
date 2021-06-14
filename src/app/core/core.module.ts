import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modulos
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class CoreModule {}
