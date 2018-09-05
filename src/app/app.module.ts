import { AdminRoutingModule } from './_modulos/admin-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { AdminModule } from './_modulos/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AdminModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,

    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: Location, useClass: HashLocationStrategy },
    HttpClient, HashLocationStrategy, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
