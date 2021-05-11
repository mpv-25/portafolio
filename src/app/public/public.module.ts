import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Moduls
import { PublicRoutingModule } from './public-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

//Components
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { VerCurriculumComponent } from './acerca-de-mi/components/ver-curriculum/ver-curriculum.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProyectosComponent,
    AcercaDeMiComponent,
    VerCurriculumComponent,
    CurriculumComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, ReactiveFormsModule],
})
export class PublicModule {}
