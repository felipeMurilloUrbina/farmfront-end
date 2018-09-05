import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { LineaRoutingModule } from './linea-routing.module';
import { LineaComponent } from './linea.component';
import { LineaService } from '../../_servicios/linea.service';
import { NuevoLineaComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    LineaRoutingModule
  ],
  declarations: [
    LineaComponent,
    NuevoLineaComponent,
  ],
   providers: [LineaService]
})
export class LineaModule { }


