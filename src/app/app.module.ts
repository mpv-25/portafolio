import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Establecer el idioma de la app
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
registerLocaleData(localEs);

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Maps
import { AgmCoreModule } from '@agm/core';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AgmCoreModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
