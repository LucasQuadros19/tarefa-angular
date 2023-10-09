import { Component } from '@angular/core';
import { Carro } from './models/carro';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent {
  lista : Carro[] = [];

  constructor(){
    let carro1:Carro= new Carro();
    carro1.nome = 'ford';
    carro1.ano = 2018

    this.lista.push(carro1);
  }
}
