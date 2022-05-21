import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnviaremailService {

  constructor(private http: HttpClient) {

  }

  postEnviarEmail(email: any){
    var _url = 'https://formspree.io/f/mqkngyqz';
    return this.http.post(_url, email, {responseType: 'text'})
  }
}
