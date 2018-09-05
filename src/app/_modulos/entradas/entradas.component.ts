import { Component, OnInit } from '@angular/core';
import { EntradasService } from '../../_servicios/entradas.service';
@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  Entradas: any[];
  cols: any[];
  titulo = 'Entradas';  
  constructor(public servicio: EntradasService) { 
        this.cols = [
          { field: 'fecha', header: 'Fecha' },
        ]; 
  }


  ngOnInit() {
    this.get();
  }

  get() {
    this.servicio.getAll(1, 0).subscribe(data => {
      this.Entradas = data['items'];
    });
  }
}


