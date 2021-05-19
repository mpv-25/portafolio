import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Moduls
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Maps
import { AgmCoreModule } from '@agm/core';

//Angular Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field'; //Para utilizar formularios de Angular Material
import { MAT_DATE_LOCALE } from '@angular/material/core';

//Components
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { VerCurriculumComponent } from './acerca-de-mi/components/ver-curriculum/ver-curriculum.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContactoComponent } from './contacto/contacto.component';

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
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDY80HTWiwIwuD8uJsIjry0RL4eh_GRbo0',
    }),
  ],
})
export class PublicModule {}
