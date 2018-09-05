import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_interceptors/modulos';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ClienteService } from '../../_servicios/cliente.service';
import { NuevoClienteComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CommonModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClienteComponent,
    NuevoClienteComponent,
  ],
   providers: [ClienteService]
})
export class ClienteModule { }


