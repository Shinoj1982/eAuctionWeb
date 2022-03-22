import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductDetail } from '../models/productDetail';

@Injectable({ providedIn: 'root' })
export class SellerService {
    private sellerUrl = 'http://localhost:8001/api/v1/Seller';  // URL to web api

    httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' })
    };

    constructor(private http: HttpClient) { }
    
    /** GET heroes from the server */
    getProducts(): Observable<Product[]> {
        let products = this.http.get<Product[]>(this.sellerUrl, this.httpOptions);
        return products;
      }
    
      getProduct(id: string): Observable<ProductDetail> {
        const url = `${this.sellerUrl}/show-bids/${id}`;
          return this.http.get<ProductDetail>(url, this.httpOptions);
      }
}