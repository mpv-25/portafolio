import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Moduls
import { PublicRoutingModule } from './public-routing.module';

//Components
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProyectosComponent,
  ],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
