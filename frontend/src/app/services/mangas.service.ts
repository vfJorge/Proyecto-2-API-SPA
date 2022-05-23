import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangasService {

  constructor(private http: HttpClient) {

  }

  getMangas(){
    var _url = 'https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/manga/ranking?limit=100';
    var bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiMzFmMjk0OTM4NDI4YmQ3ZGU2YWQ1MGIwMWYxODJmOTc4MmM5YzBmNzczYTdkMWU4MDk2Y2U4MDVhNzY3MGVjNjRjOTVkNGYyMjAyMTU2In0.eyJhdWQiOiJjZjgxYzYwNTFmNjM3MTEzZjUzOWVlYjJlMzk0M2NkZSIsImp0aSI6IjJiMzFmMjk0OTM4NDI4YmQ3ZGU2YWQ1MGIwMWYxODJmOTc4MmM5YzBmNzczYTdkMWU4MDk2Y2U4MDVhNzY3MGVjNjRjOTVkNGYyMjAyMTU2IiwiaWF0IjoxNjUxMjY4MDUzLCJuYmYiOjE2NTEyNjgwNTMsImV4cCI6MTY1Mzg2MDA1Mywic3ViIjoiMTQ5NTY4OTIiLCJzY29wZXMiOltdfQ.nUIOSsc1nd8MzDrzrpu6X6P46XG7sD1mBzqyNNV-78gPgLU4bydP_9hBMlb3GWXQdYg5N4sImHofmEUdWJB1aVKdm9ZpbpQUru2O7FLSBULapRFQG3vm1Rru2bsSqBvQtDJisKftax1dGtYe2rHQPCgd__Y-wyggkH1fhw74M7hfrNm3es61oH1UDUf2pXJE_LUERUauZ-A-9Nwrb-lyoh3AHBn994gr7u-O5rScvqUTLIJtvBvme0j90eRH2e5vrcxOcWkXqsfAgl-v5CeddQy4F5Fk297fotegZkmQpuvyB4PppJzx2Cov9Fu30t73Z2mXqC6TIgcoLRurhjp-ew'

    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.get(_url, {
      headers: header
    })

  }
}
