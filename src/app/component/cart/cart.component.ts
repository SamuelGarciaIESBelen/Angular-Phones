import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    standalone: false
})
export class CartComponent {

  items = this.cartService.getItems();
  shippingCosts: {type: string, price: number}[] = [];
  
  total = this.cartService.getTotalPrice();
  ship = 0;
  
  constructor (private cartService : CartService, private formBuilder : FormBuilder) {
    this.cartService.getShippingPrices().subscribe(ship => this.shippingCosts = ship );
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  
  actualizarTotal() {
    this.total = this.cartService.getTotalPrice() + Number(this.ship);
  }

  onSubmit() : void  {
    this.items = this.cartService.clearCart();
    console.warn(' pedido enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
