import { Component } from '@angular/core';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css'],
})
export class ListarPessoasComponent {
  lista: Pessoa[] = [];

  constructor() {
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.idade = 10;
    pessoa1.nome = 'Joao';

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.idade = 35;
    pessoa2.nome = 'Josefino';

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.idade = 40;
    pessoa3.nome = 'Armando';

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.idade = 40;
    pessoa4.nome = 'Cleber';
    let pessoa5: Pessoa = new Pessoa();
    pessoa5.idade = 20;
    pessoa5.nome = 'Beatriz';
    let pessoa6: Pessoa = new Pessoa();
    pessoa6.idade = 60;
    pessoa6.nome = 'Paulo';
    let pessoa7: Pessoa = new Pessoa();
    pessoa7.idade = 50;
    pessoa7.nome = 'Pedro';

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.idade = 55;
    pessoa8.nome = 'Ragnar';

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.idade = 45;
    pessoa9.nome = 'Scooby';

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.idade = 25;
    pessoa10.nome = 'Scoot';

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
  }
}
