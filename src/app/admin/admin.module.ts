import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Moduls
import { AdminRoutingModule } from './admin-routing.module';

//Components
import { AdminComponent } from './admin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';

@NgModule({
  declarations: [AdminComponent, UsuarioComponent, TopNavComponent, LeftNavComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
