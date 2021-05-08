import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { PortafolioModule } from './portafolio/portafolio.module';

//Components
import { AppComponent } from './app.component';
import { PanelControlModule } from './panel-control/panel-control.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortafolioModule,
    PanelControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
