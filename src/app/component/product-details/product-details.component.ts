import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/products';
import { CartService } from '../../service/cart.service';

import { Provider } from '../../model/providers';
import { ProviderService } from '../../service/provider.service';
import { ObservableService } from '../../service/observable.service';
import { ProductService } from '../../service/product.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    standalone: false
})
export class ProductDetailsComponent {

  cartService: CartService = inject(CartService);
  observableService: ObservableService = inject(ObservableService);
  providerService: ProviderService = inject(ProviderService);
  productService: ProductService = inject(ProductService);
  
  product: Product | undefined;
  provider: Provider | undefined;
  
  constructor (private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productService.getAllProductsOriginales().subscribe(p => this.product = p.find(product => product.id === productIdFromRoute))
  
    this.providerService.getProviders().subscribe(providerList => {
      this.provider = providerList.find(p => p.id === this.product?.providerId)
    });
  }

  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Product added to the cart');
    
    this.observableService.sumarCarrito();
  }
}
