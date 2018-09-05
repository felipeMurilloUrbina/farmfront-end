import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { PruebasRoutingModule } from './pruebas-routing.module';
import { PruebasComponent } from './pruebas.component';
import { PruebasService } from '../../_servicios/pruebas.service';
import { NuevoPruebasComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    PruebasRoutingModule
  ],
  declarations: [
    PruebasComponent,
    NuevoPruebasComponent,
  ],
   providers: [PruebasService]
})
export class PruebasModule { }


