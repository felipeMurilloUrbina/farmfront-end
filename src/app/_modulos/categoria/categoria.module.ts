import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { CategoriaService } from '../../_servicios/categoria.service';
import { NuevoCategoriaComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    CategoriaRoutingModule
  ],
  declarations: [
    CategoriaComponent,
    NuevoCategoriaComponent,
  ],
   providers: [CategoriaService]
})
export class CategoriaModule { }


