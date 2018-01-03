import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuTopoComponent } from './templates/menu-topo/menu-topo.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    NovoUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
