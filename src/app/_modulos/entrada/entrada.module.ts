import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { EntradaRoutingModule } from './entrada-routing.module';
import { EntradaComponent } from './entrada.component';
import { EntradaService } from '../../_servicios/entrada.service';
import { NuevoEntradaComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    EntradaRoutingModule
  ],
  declarations: [
    EntradaComponent,
    NuevoEntradaComponent,
  ],
   providers: [EntradaService]
})
export class EntradaModule { }


