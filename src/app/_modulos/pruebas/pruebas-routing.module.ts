import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebasComponent } from './pruebas.component';
import { NuevoPruebasComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  {path: '', component: PruebasComponent},
  {path: 'nuevo', component: NuevoPruebasComponent},
  {path: 'editar/:id', component: NuevoPruebasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebasRoutingModule { }
