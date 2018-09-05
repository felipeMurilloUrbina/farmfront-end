import { ModulesPrimeng } from './../../_interceptors/modulos';
import { StructComponent } from './struct/struct.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ContenidoComponent } from './contenido/content.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToasterModule, ToasterService } from 'angular2-toaster';
import { HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorInterceptor } from '../../_interceptors/error.interceptor';
import { AdminRoutingModule } from './admin-routing.module';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    EncabezadoComponent,
    MenuComponent,
    ContenidoComponent,
    PiePaginaComponent,
    StructComponent
  ],
  exports: [StructComponent],
  imports: [
    AdminRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ModulesPrimeng,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: Location, useClass: HashLocationStrategy },
    HttpClient, HashLocationStrategy, ToasterService]
})
export class AdminModule { }
