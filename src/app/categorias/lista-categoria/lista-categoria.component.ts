import { Component, OnInit } from '@angular/core';
import { Categoria } from '../shared/categoria';
import { CategoriaService } from '../shared/categoria-service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  private categorias:Categoria[];

  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
    this.categoriaService.recuperarCategorias().subscribe(temp => this.categorias = temp);
  }

}
