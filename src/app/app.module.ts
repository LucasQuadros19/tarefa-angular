import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IndexComponent } from './index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarPessoasComponent } from './listar-pessoas/listarpessoas/listar-pessoas.component';

import { CarrolistComponent } from './Carros/carrolist/carrolist.component';
import { LivrolistComponent } from './Livros/livrolist/livrolist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    ListarPessoasComponent,
    CarrolistComponent,
    LivrolistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
