import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { TiposMovimientoRoutingModule } from './tipos-movimiento-routing.module';
import { TiposMovimientoComponent } from './tipos-movimiento.component';
import { TiposMovimientoService } from '../../_servicios/tipos-movimiento.service';
import { NuevoTiposMovimientoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    TiposMovimientoRoutingModule
  ],
  declarations: [
    TiposMovimientoComponent,
    NuevoTiposMovimientoComponent,
  ],
   providers: [TiposMovimientoService]
})
export class TiposMovimientoModule { }


