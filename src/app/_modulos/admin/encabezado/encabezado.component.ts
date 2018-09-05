import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
  providers: []
})
export class EncabezadoComponent implements OnInit {
  sucursalId = '';
  sucursales: any[];
  constructor(private _router: Router) { }

  ngOnInit() {
    // this.sucursales = JSON.parse(localStorage.getItem('sucursales'));
    // setTimeout(() => {
    //   this.sucursalId  = localStorage.getItem('sucursal').trim();
    // }, 100);
  }

  onCambioEmpresa(event) {
    localStorage.setItem('sucursal',  event);
    this._router.navigate(['/admin/dashboard']);
  }

  cerrarSession() {
    this._router.navigate(['/login']);
  }

}
