import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CatalogoService } from './catalogo.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http: HttpClient, private catalogoService: CatalogoService) { }

  getTipoCliente(){
    var _url = 'http://localhost:8000/api/auth/type';
    var bearerToken = localStorage.getItem('bearerToken');
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.get(_url, {
      headers: header
    })
  }

  postIniciarSesion(cuenta: any){
    var _url = 'http://localhost:8000/api/auth/login';
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(_url, cuenta, {
      headers: header
    })
  }

  postCrearCuenta(cuenta: any){
    var _url = 'http://localhost:8000/api/auth/register';
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(_url, cuenta, {
      headers: header
    })
  }

  guardarToken(bearerToken: any){
    localStorage.setItem('bearerToken', bearerToken);
  }
}
