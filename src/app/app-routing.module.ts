import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';

const routes : Routes = [
  {
    path: 'novo-usuario',
    component: NovoUsuarioComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

}
