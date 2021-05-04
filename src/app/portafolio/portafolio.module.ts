import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

//Module
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [],
})
export class PortafolioModule {}
