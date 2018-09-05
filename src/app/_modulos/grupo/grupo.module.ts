import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo.component';
import { GrupoService } from '../../_servicios/grupo.service';
import { NuevoGrupoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    GrupoRoutingModule
  ],
  declarations: [
    GrupoComponent,
    NuevoGrupoComponent,
  ],
   providers: [GrupoService]
})
export class GrupoModule { }


