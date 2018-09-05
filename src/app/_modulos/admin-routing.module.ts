 

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'almacenes', loadChildren: '../almacen/almacen.module#AlmacenModule'},
  { path: 'categorias', loadChildren: '../categoria/categoria.module#CategoriaModule'},
  { path: 'clientes', loadChildren: '../cliente/cliente.module#ClienteModule'},
  { path: 'empresas', loadChildren: '../empresa/empresa.module#EmpresaModule'},
  { path: 'entradas', loadChildren: '../entrada/entrada.module#EntradaModule'},
  { path: 'grupos', loadChildren: '../grupo/grupo.module#GrupoModule'},
  { path: 'lineas', loadChildren: '../linea/linea.module#LineaModule'},
  { path: 'lotes', loadChildren: '../lote/lote.module#LoteModule'},
  { path: 'productos', loadChildren: '../producto/producto.module#ProductoModule'},
  { path: 'sucursales', loadChildren: '../sucursal/sucursal.module#SucursalModule'},
  { path: 'tipos-movimiento', loadChildren: '../tipos-movimiento/tipos-movimiento.module#TiposMovimientoModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
