import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  public bearer = localStorage.getItem('bearerToken');

  constructor(private http: HttpClient) { }

  getCatalogo(){
    var _url = 'http://localhost:8000/api/articulos';
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(_url, {
      headers: header
    })
  }

  getArticulo(id: any){
    var _url = 'http://localhost:8000/api/articulos/'+id;
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(_url, {
      headers: header
    })
  }

  postAgregarProducto(producto: any){
    var _url = 'http://localhost:8000/api/articulos';
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+this.bearer)
    return this.http.post(_url, producto, {
      headers: header
    })
  }

  delEliminarProducto(id: any){
    var _url = 'http://localhost:8000/api/articulos/'+id;
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+this.bearer)
    return this.http.delete(_url, {
      headers: header
    })
  }

  putAgregarProducto(producto: any, id: any){
    var _url = 'http://localhost:8000/api/articulos/'+id;
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+this.bearer)
    return this.http.put(_url, producto, {
      headers: header
    })
  }
}
