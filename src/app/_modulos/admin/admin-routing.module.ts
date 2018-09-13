 

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructComponent } from './struct/struct.component';

const routes: Routes = [
    { path: '', component: StructComponent,
      children: [
  { path: 'categorias', loadChildren: '../../categoria/categoria.module#CategoriaModule'},
  { path: 'clientes', loadChildren: '../../cliente/cliente.module#ClienteModule'},
  { path: 'direcciones', loadChildren: '../../direccion/direccion.module#DireccionModule'},
  { path: 'modelos', loadChildren: '../../modelos/modelos.module#ModelosModule'},
  { path: 'monedas', loadChildren: '../../moneda/moneda.module#MonedaModule'},
  { path: 'presentaciones', loadChildren: '../../presentacion/presentacion.module#PresentacionModule'},
  { path: 'puertos', loadChildren: '../../puerto/puerto.module#PuertoModule'},
  { path: 'tipos-cliente', loadChildren: '../../tipos-cliente/tipos-cliente.module#TiposClienteModule'},
  { path: 'tipos-precio', loadChildren: '../../tipos-precio/tipos-precio.module#TiposPrecioModule'},
  { path: 'tipos-producto', loadChildren: '../../tipos-producto/tipos-producto.module#TiposProductoModule'},
  { path: 'usuarios', loadChildren: '../../usuarios/usuarios.module#UsuariosModule'},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
