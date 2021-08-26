import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dw-datos-poligono',
  templateUrl: './datos-poligono.component.html',
  styleUrls: ['./datos-poligono.component.css']
})
export class DatosPoligonoComponent implements OnInit {
  poligonos = [
    {
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
    },
    {
      nombre: 'triangulo',
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
        }
      ]
    },
    {
      nombre: 'pentagono',
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
          x: 15,
          y: 10
        },
        {
          x: 15,
          y: 10
        }
      ]
    },
    {
      nombre: 'hexagono',
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
          x: 15,
          y: 10
        },
        {
          x: 15,
          y: 10
        },
        {
          x: 50,
          y: 50
        }
      ]
    }
  ];

  //mayorNumeroPuntos = 5;
  mayorNumeroPuntos = Math.max.apply(
    Math,
    this.poligonos.map(function(o) {
      return o.puntos.length;
    })
  );

  sortByLength() {
    return this.poligonos.sort((a, b) =>
      a.puntos.length > b.puntos.length
        ? 1
        : a.puntos.length === b.puntos.length
        ? 0
        : -1
    );
  }

  constructor() {}

  ngOnInit() {}
}
