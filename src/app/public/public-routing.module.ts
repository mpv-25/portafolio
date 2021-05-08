import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'proyectos', component: ProyectosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
