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

  delEliminarProducto(id: any){
    var _url = 'http://localhost:8000/api/articulos/'+id;
    var bearerToken = ''
    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.delete(_url)
  }
}
