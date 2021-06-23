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
import { LoginComponent } from './admin/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor, authInterceptorProviders } from './admin/helpers/auth.interceptor';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AgmCoreModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es' },
    authInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
