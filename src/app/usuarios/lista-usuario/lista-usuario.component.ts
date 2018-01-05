import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario-service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  private usuarios:Usuario[];
  private usuarioSelecionado:Usuario;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.recuperarUsuarios().subscribe(temp => this.usuarios = temp);
  }

  public selecionarUsuario(usuario:Usuario){
    this.usuarioSelecionado = usuario;
  }

}
