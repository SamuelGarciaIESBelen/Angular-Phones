import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../model/products';
import { CartService } from '../../service/cart.service';

import { Provider } from '../../model/providers';
import { ProviderService } from '../../service/provider.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    standalone: false
})
export class ProductDetailsComponent {

  cartService: CartService = inject(CartService);
  providerService: ProviderService = inject(ProviderService);
  product: Product | undefined;
  provider: Provider | undefined;
  
  constructor (private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  
    this.providerService.getProviders().subscribe(providerList => {
      this.provider = providerList.find(p => p.id === this.product?.providerId)
    });
  }

  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Product added to the cart');
  }
}
