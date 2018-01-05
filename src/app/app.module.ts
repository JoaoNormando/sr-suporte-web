import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuTopoComponent } from './templates/menu-topo/menu-topo.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsuarioService } from './usuarios/shared/usuario-service';
import { NovaCategoriaComponent } from './categorias/nova-categoria/nova-categoria.component';
import { CategoriaService } from './categorias/shared/categoria-service';
import { ListaCategoriaComponent } from './categorias/lista-categoria/lista-categoria.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    NovoUsuarioComponent,
    NovaCategoriaComponent,
    ListaCategoriaComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService, CategoriaService],
  bootstrap: [AppComponent]
})

export class AppModule { }
