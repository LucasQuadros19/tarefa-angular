import { Component } from '@angular/core';
import { Livros } from './models/livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {
    lista : Livros[] = []
    constructor(){
      let livros1: Livros = new Livros();
      livros1.author = 'Shakira'
      livros1.title = 'Neymar titulo'

      this.lista.push(livros1);
    }


}
