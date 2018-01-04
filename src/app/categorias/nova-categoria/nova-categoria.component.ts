import { Component, OnInit } from '@angular/core';
import { Categoria } from '../shared/categoria';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../shared/categoria-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['./nova-categoria.component.css']
})
export class NovaCategoriaComponent implements OnInit {

  private categoria:Categoria;
  private formNovaCategoria:FormGroup;

  private enviado:boolean = false;

  constructor(private categoriaService:CategoriaService, private formBuilder:FormBuilder, private router:Router) { 
    this.categoria = new Categoria();
  }

  ngOnInit() {
    this.formNovaCategoria = this.formBuilder.group({
      descricao: ['', Validators.required]
    });
  }

  public enviarFormulario(){
    this.enviado = true;

    if(this.formNovaCategoria.valid){
      const request = this.categoriaService.salvarCategoria(this.categoria).subscribe(
        resp => {
         this.router.navigate(['novo-usuario']);
        },
        err => {
          console.log("Desculpe, ocorreu um erro...");  
        }
      );
    }
    
  }

}
