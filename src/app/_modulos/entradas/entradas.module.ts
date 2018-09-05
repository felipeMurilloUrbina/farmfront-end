import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { EntradasComponent } from './entradas.component';

@NgModule({
  imports: [
    CommonModule,
    EntradasRoutingModule
  ],
  declarations: [EntradasComponent]
})
export class EntradasModule { }


