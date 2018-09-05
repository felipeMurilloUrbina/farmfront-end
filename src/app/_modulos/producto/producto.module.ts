import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { ProductoService } from '../../_servicios/producto.service';
import { NuevoProductoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    ProductoRoutingModule
  ],
  declarations: [
    ProductoComponent,
    NuevoProductoComponent,
  ],
   providers: [ProductoService]
})
export class ProductoModule { }


