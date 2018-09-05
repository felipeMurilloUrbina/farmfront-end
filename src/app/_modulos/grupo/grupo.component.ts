import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../_servicios/grupo.service';
import { MensajeEstatus } from '../../_modelos/mensaje.enum';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  Grupos: any[];
  cols: any[];
  titulo = 'Grupos';  
  constructor(public servicio: GrupoService) { 
        this.cols = [
          { field: 'codigo', header: 'Codigo' },
          { field: 'descripcion', header: 'Descripcion' },
        ]; 
  }


  ngOnInit() {
    this.get();
  }

  get() {
    this.servicio.getAll(1, 0).subscribe(data => {
      this.Grupos = data['items'];
    });
  }
}


