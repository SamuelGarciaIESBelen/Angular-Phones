import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})

export class ObservableService {
  
  private cartService: CartService = inject(CartService);

  numCarrito = 0;
  
  private countCarrito = new BehaviorSubject<number>(this.numCarrito);
  countCarrito$ = this.countCarrito.asObservable();
  
  constructor() {
    this.numCarrito = this.cartService.getItems().length;
    this.countCarrito.next(this.numCarrito);
  }

  sumarCarrito() { this.countCarrito.next(this.countCarrito.value + 1); }
  restarCarrito() { this.countCarrito.next(this.countCarrito.value - 1); }
}