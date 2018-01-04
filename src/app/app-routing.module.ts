import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';
import { NovaCategoriaComponent } from './categorias/nova-categoria/nova-categoria.component';
import { ListaCategoriaComponent } from './categorias/lista-categoria/lista-categoria.component';

const routes : Routes = [
  {
    path: 'novo-usuario',
    component: NovoUsuarioComponent
  },
  {
    path: 'nova-categoria',
    component: NovaCategoriaComponent
  },
  {
    path: 'lista-categoria',
    component: ListaCategoriaComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

}
