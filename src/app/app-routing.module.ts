import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { AboutComponent } from './portafolio/pages/about/about.component';
import { ContactComponent } from './portafolio/pages/contact/contact.component';
import { HomeComponent } from './portafolio/pages/home/home.component';
import { ProjectsComponent } from './portafolio/pages/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'acerca-de-mi', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
