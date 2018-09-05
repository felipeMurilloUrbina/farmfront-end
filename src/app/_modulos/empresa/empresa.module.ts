import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';
import { EmpresaService } from '../../_servicios/empresa.service';
import { NuevoEmpresaComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    EmpresaRoutingModule
  ],
  declarations: [
    EmpresaComponent,
    NuevoEmpresaComponent,
  ],
   providers: [EmpresaService]
})
export class EmpresaModule { }


