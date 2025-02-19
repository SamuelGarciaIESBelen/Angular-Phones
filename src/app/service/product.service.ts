import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlOriginales = 'http://localhost:3000/originales';
  private urlExamen = 'http://localhost:3000/examen';

  constructor(private http: HttpClient) { }

  getAllProductsOriginales() { return this.http.get<Product[]>(this.urlOriginales); }

  getProductOriginal(id: string) { return this.http.get<Product>(`${this.urlOriginales}/${id}`); }
  
  getAllProductsExamen() { return this.http.get<Product[]>(this.urlExamen); }

  getProductExamen(id: string) { return this.http.get<Product>(`${this.urlExamen}/${id}`); }

}
