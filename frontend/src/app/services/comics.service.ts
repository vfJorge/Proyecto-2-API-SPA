import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5'

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) {

  }

  getComics(){
    var timestamp = Date.now()
    var publicAPIkey = '45943051efcdd93a30baa8d76f4885cb'
    var privateAPIkey = '264bc45a0546a1a130f453963acb7145a15a73ed'
    var _urlNoHash = timestamp+privateAPIkey+publicAPIkey;
    var _urlHash = Md5.hashStr(_urlNoHash);
    var _url = 'http://gateway.marvel.com/v1/public/comics?ts='+timestamp+'&apikey='+publicAPIkey+'&hash='+_urlHash;
    var _url2 = 'https://gateway.marvel.com:443/v1/public/comics?orderBy=-focDate&limit=100&apikey=45943051efcdd93a30baa8d76f4885cb'
    let header= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(_url2, {
      headers: header
    })

  }
}
