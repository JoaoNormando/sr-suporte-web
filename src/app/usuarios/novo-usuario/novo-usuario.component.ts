import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario-service';
import { Usuario } from '../shared/usuario';

import { FormBuilder, Validators, FormControlName, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit{

  private usuario:Usuario;

  private formNovoUsuario:FormGroup;
  private enviado:boolean = false;

  constructor(private usuarioService:UsuarioService, private formBuilder:FormBuilder) {
    this.usuario = new Usuario();
    this.usuario.nome = "Fulano";
   }
   
  ngOnInit(): void {
    this.formNovoUsuario = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      telefone:[''],
      celular:[''],
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
      categoria: ['']
    });
  }

   enviarFormulario(){
     this.enviado = true;
     if(this.formNovoUsuario.valid){
      console.log("Executando o envio do formulário...");
    }
   }

}
