import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LivrosComponent } from './livros/livros.component';
import { ListarPessoasComponent } from './listar-pessoas/listarpessoas/listar-pessoas.component';
import { CarrosComponent } from './carros/carros.component';

const routes: Routes = [{ path: "", component: IndexComponent},
{ path:'admin', component:IndexComponent,children:[
  {path:'pessoas',component:ListarPessoasComponent},
  {path:'carros',component:CarrosComponent},
  {path:'livros',component:LivrosComponent}

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
