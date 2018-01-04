import { HttpClient } from "@angular/common/http";
import { Categoria } from "./categoria";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoriaService {
    
    private endereco:string = "http://10.100.100.40:8080/categoria";

    constructor(private httpClient:HttpClient){ }

    public salvarCategoria(categoria:Categoria){
        return this.httpClient.post(this.endereco, categoria);       
    }

    public recuperarCategorias() : Observable<Categoria[]>{        
        return this.httpClient.get<Categoria[]>(this.endereco);
    }

}