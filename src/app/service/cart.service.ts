import { inject, Injectable } from '@angular/core';
import { Product } from '../model/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: {product: Product, cantidad: number}[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.cantidad++;
    } else {
      this.items.push({ product, cantidad: 1 });
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('assets/shipping.json')
  }

  getTotalPrice() {
    return this.items.reduce((acc, cur) => acc + cur.product.price, 0)
  }
}
