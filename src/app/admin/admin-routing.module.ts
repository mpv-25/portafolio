import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AdminComponent } from './admin.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { SkillComponent } from './skill/skill.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'usuario' },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'skill', component: SkillComponent },
      { path: 'proyecto', component: ProyectoComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
