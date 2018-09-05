import { Component, OnInit } from '@angular/core';
import { LineService } from '../../_servicios/line.service';
@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.css']
})
export class LineComponent implements OnInit {
  Lineas: any[];
  cols: any[];
  titulo = 'Lineas';  
  constructor(public servicio: LineService) { 
        this.cols = [
        ]; 
  }


  ngOnInit() {
    this.get();
  }

  get() {
    this.servicio.getAll(1, 0).subscribe(data => {
      this.Lineas = data['items'];
    });
  }
}


