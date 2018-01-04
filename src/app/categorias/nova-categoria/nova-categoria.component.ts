import { Component, OnInit } from '@angular/core';
import { Categoria } from '../shared/categoria';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['./nova-categoria.component.css']
})
export class NovaCategoriaComponent implements OnInit {

  private categoria:Categoria;
  private formNovaCategoria:FormGroup;

  private enviado:boolean = false;

  constructor(private formBuilder:FormBuilder) { 
    this.categoria = new Categoria();
  }

  ngOnInit() {
    this.formNovaCategoria = this.formBuilder.group({
      descricao: new FormControl('', Validators.required)
    });
  }

  public enviarFormulario(){
    this.enviado = true;
  }

}
