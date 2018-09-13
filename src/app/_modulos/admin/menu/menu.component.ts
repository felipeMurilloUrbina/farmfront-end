import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '../../../_servicios/autentificacion.service';
import { MenuItem } from 'primeng/api';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  // providers: [EstructuraService, JwtHelperService]
})
export class MenuComponent implements OnInit {
  usuario: any;
  helper: any;
  items: MenuItem[];
  // constructor(private _service: EstructuraService, private _serviceAuthenticate: AuthenticationService) {
    constructor() {
    this.helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    this.usuario = this.helper.decodeToken(token);
  }

  ngOnInit() {
    this.items = [
      {
          label: 'Catalogos',
          icon: 'pi pi-pw pi-file',
          items: [{
                  label: 'Almacenes',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: '/almacenes'
              },
              {separator: true},
              {
                label: 'Lineas',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/lineas',
              },
              {
                label: 'Productos',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/productos'
              },
              {separator: true},
              {
                label: 'Clientes',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/clientes',
              },
              {
                label: 'Tipos de Movimientos',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/tipos-movimiento',
              },
              {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/usuarios',
              },
              {
                label: 'Proveedores',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/proveedores',
              },
              {
                label: 'Perfiles',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/productos',
              },
              {
                label: 'Permisos',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
              },
              {
                label: 'Grupos de Clientes',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/grupos',
              },
              {
                label: 'Sucursales',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/sucursales',
              },
              {
                label: 'Categorias de Prod.',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/categorias',
              }
          ]
      },
      {
          label: 'Inventarios',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Entradas', icon: 'pi pi-fw pi-trash'},
              {label: 'Salidas', icon: 'pi pi-fw pi-refresh'},
              {label: 'Traspasos', icon: 'pi pi-fw pi-refresh'},
              {label: 'Re-Ajustes', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Facturacion',
          icon: 'pi pi-fw pi-question',
          items: [
              {
                  label: 'Facturas',
                  icon: 'pi pi-pi pi-bars'
              },
              {
                  label: 'Nueva Factura',
                  icon: 'pi pi-pi pi-search',
                  items: [
                      {
                          label: 'Text',
                          items: [
                              {
                                  label: 'Workspace'
                              }
                          ]
                      },
                      {
                          label: 'User',
                          icon: 'pi pi-fw pi-file',
                      }
              ]}
          ]
      },
      {
          label: 'Cartera',
          icon: 'pi pi-fw pi-cog',
          items: [
              {
                  label: 'Abonar',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {label: 'Save', icon: 'pi pi-fw pi-save'},
                      {label: 'Update', icon: 'pi pi-fw pi-save'},
                  ]
              },
              {
                  label: 'Listado',
                  icon: 'pi pi-fw pi-tags',
              }
          ]
      },
      {
        label: 'Reportes',
        icon: 'pi pi-fw pi-cog',
        items: [

        ]
      },
      {
        label: 'Ayuda',
        icon: 'pi pi-fw pi-cog',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Save', icon: 'pi pi-fw pi-save'},
                    {label: 'Update', icon: 'pi pi-fw pi-save'},
                ]
            },
            {
                label: 'Other',
                icon: 'pi pi-fw pi-tags',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                ]
            }
        ]
      }
  ];
  }

  // logout() {
  //   this._serviceAuthenticate.logout();
  // }

  openMenu(event) {
    $('#catalogs').removeClass('menu-open');
    $('#menu').addClass('');
  }

}
