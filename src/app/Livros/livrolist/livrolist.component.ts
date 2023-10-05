
import { Component } from '@angular/core';
import { Livro } from './model/LivroM'; 

@Component({
  selector: 'app-livrolist',
  templateUrl: './livrolist.component.html',
  styleUrls: ['./livrolist.component.css']
})
export class LivrolistComponent {
  livros: Livro[];

  constructor() {

    this.livros = [
      { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes' },
      { titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez' },
      { titulo: 'A Revolução dos Bichos', autor: 'George Orwell' },
      { titulo: 'O Apanhador no Campo de Centeio', autor: 'J.D. Salinger' },
      { titulo: 'Orgulho e Preconceito', autor: 'Jane Austen' },

    ];
  }
}
