import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Moduls
import { AdminRoutingModule } from './admin-routing.module';

//Components
import { AdminComponent } from './admin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { SkillComponent } from './skill/skill.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, UsuarioComponent, TopNavComponent, LeftNavComponent, SkillComponent, ProyectoComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
