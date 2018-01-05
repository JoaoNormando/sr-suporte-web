import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario-service';
import { Usuario } from '../shared/usuario';

import { FormBuilder, Validators, FormControlName, FormGroup, FormControl } from '@angular/forms';
import { CategoriaService } from '../../categorias/shared/categoria-service';
import { Categoria } from '../../categorias/shared/categoria';
import { Router } from '@angular/router';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit{

  private usuario:Usuario;
  private categorias:Categoria[];

  private formNovoUsuario:FormGroup;
  private enviado:boolean = false;

  constructor(private usuarioService:UsuarioService, private categoriaService:CategoriaService, private formBuilder:FormBuilder, private router:Router) {
    this.usuario = new Usuario();
   }
   
  ngOnInit(): void {
    this.formNovoUsuario = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      telefone:[''],
      celular:[''],
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
      categoria: new FormControl('', [Validators.required])
    });
    this.categoriaService.recuperarCategorias().subscribe(temp => this.categorias = temp);
  }

   enviarFormulario(){
     this.enviado = true;
     if(this.formNovoUsuario.valid){
      this.usuarioService.salvarUsuario(this.usuario).subscribe(
        resp => {
          this.router.navigate(['lista-usuario']);
        },
        err => {
          console.log("Ocorreu um erro...");
        }
      );
    }
   }

}
