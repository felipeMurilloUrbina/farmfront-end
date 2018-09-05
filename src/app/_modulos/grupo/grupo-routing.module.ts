import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoComponent } from './grupo.component';
import { NuevoGrupoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  {path: '', component: GrupoComponent},
  {path: 'nuevo', component: NuevoGrupoComponent},
  {path: 'editar/:id', component: NuevoGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
