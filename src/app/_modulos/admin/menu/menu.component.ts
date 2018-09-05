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
                  routerLink: 'almacenes',
                  items: []
              },
              {separator: true},
              {
                label: 'Lineas',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'lineas',
                items: []
              },
              {
                label: 'Productos',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
                items: []
              },
              {separator: true},
              {
                label: 'Clientes',
                icon: 'pi pi-fw pi-plus',
                items: [{
                        label: 'Grupos',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: 'productos',
                }]
              },
              {
                label: 'Tipos de Movimientos',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
              },
              {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
                items: []
              },
              {
                label: 'Proveedores',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
                items: []
              },
              {
                label: 'Perfiles',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
                items: []
              },
              {
                label: 'Permisos',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
                items: []
              },
              {
                label: 'Grupos de Clientes',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
              },
              {
                label: 'Sucursales',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
              },
              {
                label: 'Categorias de Prod.',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'productos',
              }
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Help',
          icon: 'pi pi-fw pi-question',
          items: [
              {
                  label: 'Contents',
                  icon: 'pi pi-pi pi-bars'
              },
              {
                  label: 'Search',
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
          label: 'Actions',
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
