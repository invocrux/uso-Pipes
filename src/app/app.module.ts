import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PrimeNgModule } from './primeNg/primeNg.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppComponent } from './app.component';
import { registerLocaleData} from '@angular/common'; //para traducir los resultados
import localeEs from '@angular/common/locales/es-CO';
registerLocaleData( localeEs );

@NgModule({
  declarations:[AppComponent],
  
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
    AppRouterModule,
    BrowserAnimationsModule
     
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
