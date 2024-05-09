import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInfo } from './product-info';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {


  private baseURL = "http://localhost:8080/api/v1/productInfo/";

  constructor(private httpClient: HttpClient) {}
    getProductInfosList(): Observable<ProductInfo[]>{
      return this.httpClient.get<ProductInfo[]>(`${this.baseURL}`);
    }
    createProductInfo(productInfo: ProductInfo): Observable<any>{
      return this.httpClient.post(`${this.baseURL}`, productInfo);
      }
}
