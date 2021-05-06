import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import {AppRoutingModule} from './app-routing.module';
import {PortafolioModule} from './portafolio/portafolio.module';
import {SharedModule} from './shared/shared.module';

//Components
import {AppComponent} from './app.component';
import { PanelControlModule } from './panel-control/panel-control.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PortafolioModule, PanelControlModule ,SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
