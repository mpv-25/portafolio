import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import {AppRoutingModule} from './app-routing.module';
import {PortafolioModule} from './portafolio/portafolio.module';

//Components
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PortafolioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
