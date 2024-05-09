import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) {}
    getProductsList(): Observable<Product[]>{
      return this.httpClient.get<Product[]>(`${this.baseURL}`);
    }

    createProduct(product: Product): Observable<any>{
      return this.httpClient.post(`${this.baseURL}`, product);
    }
   }

