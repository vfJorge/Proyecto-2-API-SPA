import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) {

  }

  getAnimes(){
    var _url = 'https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/anime/ranking?limit=100';
    var bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0YzdjNzQ4NzIzZTM5NjdjNTQzNDI3NmU0MmY0MjAwYmNkZWIyNDE0ZDYwN2IzMDBhNjk4MGRmYjU2ZGNiNzhmNzRjNzczYmFhM2Y4ZjhkIn0.eyJhdWQiOiJjZjgxYzYwNTFmNjM3MTEzZjUzOWVlYjJlMzk0M2NkZSIsImp0aSI6Ijg0YzdjNzQ4NzIzZTM5NjdjNTQzNDI3NmU0MmY0MjAwYmNkZWIyNDE0ZDYwN2IzMDBhNjk4MGRmYjU2ZGNiNzhmNzRjNzczYmFhM2Y4ZjhkIiwiaWF0IjoxNjUxMjY1OTQwLCJuYmYiOjE2NTEyNjU5NDAsImV4cCI6MTY1Mzg1Nzk0MCwic3ViIjoiMTQ5NTY4OTIiLCJzY29wZXMiOltdfQ.mtIw380HrGdypvpopU8EqmT5B9OHcNdRlYtOYMSj28J-KVhW7-ixLPgrsysbcRv_SmsDhenYCm2ZJEgDZte0tnYgncrDD4yv4GuvjetNViqILerNemqgFgT_aHhI-v1X4bdM1IPaMit4Mw6SmiT2J9TsGutJhUUoV3z2lKx0qWipVZyhMvenkH6EGxHswwuiaOTHqdoRND7Sf2Hetb-kGW912L6BqNJ8NdqfKdu7W2RPstN0Q1475gagUhu5h7w-NYK7dTgd6V6UQq1AxST5p-tAskg5BBRdeEM7n-5DQkoz_iKSHJjftPIYrd-jGEMzUW55dAVQ2RWsZhJDk0OUCQ'

    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.get(_url, {
      headers: header
    })

  }
}
