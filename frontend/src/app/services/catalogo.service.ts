import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  getCatalogo(){
    var _url = 'http://localhost:8000/api/articulos';
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(_url, {
      headers: header
    })
  }

  postAgregarProducto(producto: any){
    var _url = 'http://localhost:8000/api/articulos';
    var bearerToken = ''
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.post(_url, {
      headers: header
    }, producto)
  }

  delEliminarProducto(id: any){
    var _url = 'http://localhost:8000/api/articulos/'+id;
    var bearerToken = ''
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.delete(_url, {
      headers: header
    })
  }

  putAgregarProducto(producto: any, id: any){
    var _url = 'http://localhost:8000/api/articulos/'+id;
    var bearerToken = ''
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.put(_url, {
      headers: header
    }, producto)
  }
}
