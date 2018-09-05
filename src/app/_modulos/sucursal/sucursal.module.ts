import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { SucursalRoutingModule } from './sucursal-routing.module';
import { SucursalComponent } from './sucursal.component';
import { SucursalService } from '../../_servicios/sucursal.service';
import { NuevoSucursalComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    SucursalRoutingModule
  ],
  declarations: [
    SucursalComponent,
    NuevoSucursalComponent,
  ],
   providers: [SucursalService]
})
export class SucursalModule { }


