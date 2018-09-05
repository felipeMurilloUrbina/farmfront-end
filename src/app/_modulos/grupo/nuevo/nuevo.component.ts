import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { GrupoService } from '../../../_servicios/grupo.service';
import { Grupo } from '../../../_modelos/grupo.model';
import { MensajeEstatus } from '../../../_modelos/mensaje.enum';

@Component({
  selector: 'app-nuevo-grupo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoGrupoComponent implements OnInit {
  Grupos: any[];
  cols: any[];
  titulo = 'Nuevo Grupo';
  grupo: Grupo;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private servicio: GrupoService) {
    this.grupo = new Grupo();
    this.route.params
      .subscribe(params => {
        if (params['id'] !== undefined) {
            this.grupo.id = params['id'];
        }
      });
  }

  ngOnInit() {
    this.get();
  }

  get() {
    if (this.grupo.id) {
        this.servicio.getId(this.grupo.id).subscribe(data => {
          this.grupo = data['item'];
        });
    }
  }

  limpiar() {
  }

  regresar() {
    this.router.navigate(['/admin/grupos'], { queryParams: {} });
  }

  validar() {
  }

  guardar() {
    this.servicio.save(this.grupo, '').subscribe( dato => {
        this.servicio.enviarMensaje(MensajeEstatus.ok, 'Grupos', dato);
        this.limpiar();
    });
  }
}
