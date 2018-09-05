import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';

@NgModule({
  imports: [
    CommonModule,
    LineRoutingModule
  ],
  declarations: [LineComponent]
})
export class LineModule { }


