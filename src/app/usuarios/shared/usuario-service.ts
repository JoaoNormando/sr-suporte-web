import { Injectable, Inject } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

    private endereco:string = "http://10.100.100.40:8080/usuario";

    constructor (private http:HttpClient) { }

    public salvarUsuario(usuario:Usuario){
        this.http.post(this.endereco, usuario);
    }

    public recuperarUsuarios() : Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.endereco);
    }

}