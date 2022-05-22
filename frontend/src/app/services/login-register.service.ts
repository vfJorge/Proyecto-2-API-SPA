import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http: HttpClient) { }

  getTipoCliente(bearerToken: any){
    var _url = 'http://localhost:8000/api/auth/type';
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.get(_url, {
      headers: header
    })
  }

  postIniciarSesion(cuenta: any){
    var _url = 'http://localhost:8000/api/auth/login';
    var bearerToken = ''
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(_url, cuenta, {
      headers: header
    })
  }

  postCrearCuenta(cuenta: any){
    var _url = 'http://localhost:8000/api/auth/register';
    var bearerToken = ''
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(_url, cuenta, {
      headers: header
    })
  }
}
