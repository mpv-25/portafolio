import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';

//Module

import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavbarComponent,
  FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavbarComponent, FooterComponent]
})
export class SharedModule { }
