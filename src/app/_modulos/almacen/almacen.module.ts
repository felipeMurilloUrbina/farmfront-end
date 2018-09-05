 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { AlmacenRoutingModule } from './almacen-routing.module';
import { AlmacenComponent } from './almacen.component';
import { AlmacenService } from '../../_servicios/almacen.service';
import { NuevoAlmacenComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    AlmacenRoutingModule
  ],
  declarations: [
    AlmacenComponent,
    NuevoAlmacenComponent,
  ],
   providers: [AlmacenService]
})
export class AlmacenModule { }


