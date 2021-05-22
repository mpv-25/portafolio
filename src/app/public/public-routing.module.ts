import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GoogleSignComponent } from './acerca-de-mi/components/google-sign/google-sign.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'acerca-de-mi', component: AcercaDeMiComponent },
      { path: 'curriculum', component: CurriculumComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'google-sign', component: GoogleSignComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
