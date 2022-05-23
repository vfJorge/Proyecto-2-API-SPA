import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ValidaremailService {

  constructor(private http: HttpClient) {

  }

  getValidateEmail(email: string){
    var _url = 'https://open.kickbox.com/v1/disposable/';
    _url=_url+email;
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(_url, {
      headers: header
    })

  }
}
