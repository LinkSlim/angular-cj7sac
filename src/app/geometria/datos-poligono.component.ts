import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dw-datos-poligono',
  templateUrl: './datos-poligono.component.html',
  styleUrls: ['./datos-poligono.component.css']
})
export class DatosPoligonoComponent implements OnInit {
  poligono = {
    nombre: 'cuadrado',
    puntos: [
      {
        x: 10,
        y: 5
      },
      {
        x: 15,
        y: 5
      },
      {
        x: 15,
        y: 10
      },
      {
        x: 10,
        y: 10
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
