import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { LoteRoutingModule } from './lote-routing.module';
import { LoteComponent } from './lote.component';
import { LoteService } from '../../_servicios/lote.service';
import { NuevoLoteComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    LoteRoutingModule
  ],
  declarations: [
    LoteComponent,
    NuevoLoteComponent,
  ],
   providers: [LoteService]
})
export class LoteModule { }


