import { Component } from '@angular/core';
import { Carro } from './model/CarroM';

@Component({
  selector: 'app-carrolist',
  templateUrl: './carrolist.component.html',
  styleUrls: ['./carrolist.component.css']
})
export class CarrolistComponent {
  carros: { nome: string, ano: number }[];

  constructor() {
    this.carros = [
      { nome: 'Toyota Corolla', ano: 2020 },
      { nome: 'Honda Civic', ano: 2021 },
      { nome: 'Ford Mustang', ano: 2019 },
      { nome: 'Chevrolet Camaro', ano: 2022 },

    ];
  }
}