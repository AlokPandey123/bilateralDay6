import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='https://fakestoreapi.in/api/products?limit=10';
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.url);
  }
  url2="http://localhost:3000/users";
 

 
  postData(data:any){
     return this.http.post<any>(this.url2,data);
  }
}
