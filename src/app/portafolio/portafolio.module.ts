import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

//Module
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutComponent, ContactComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class PortafolioModule {}
