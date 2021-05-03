import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

//Module

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ProyectoComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class PortafolioModule {}
