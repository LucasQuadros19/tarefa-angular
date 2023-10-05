import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListarPessoasComponent } from './listar-pessoas/listarpessoas/listar-pessoas.component';

import { CarrolistComponent } from './Carros/carrolist/carrolist.component';
import { LivrolistComponent } from './Livros/livrolist/livrolist.component';

const routes: Routes = [{ path: '', component: IndexComponent },
{ path: 'Carro', component: CarrolistComponent },
{ path: 'livro', component: LivrolistComponent },
{ path: 'Pessoa', component: ListarPessoasComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
