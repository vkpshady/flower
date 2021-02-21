import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { Flower } from '../model/Flower';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private baseUrl = 'http://localhost:8080/';

  constructor( private httpClient: HttpClient ) {  }



  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  // addUser(u: User): Observable<Object>{
  //   console.log('inside service');
  //   let empHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.httpClient.post('http://localhost:8080/users/add', JSON.stringify(u), { headers: empHeaders });
  // }


  addUser(u: object): Observable<Object>{
    console.log('inside service');
    // let empHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.baseUrl}` + 'users/add', u);
  }

  getFlowers(){
    return this.httpClient.get<Flower>('http://localhost:8080/flowers/get');
  }

  addFlower(f: Flower) {
    return this.httpClient.post<Flower>('http://localhost:8080/books/add', f);
  }


}
