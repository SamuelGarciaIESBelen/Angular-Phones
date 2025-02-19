import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent {
  
  private productService: ProductService = inject(ProductService);
  
  productsOriginales: Product[] = [];
  productsExamen: Product[] = [];
  products: Product[] = [];

  constructor() {
    this.productService.getAllProductsOriginales().subscribe((p: Product[]) => this.productsOriginales = p);
    this.productService.getAllProductsExamen().subscribe((p: Product[]) => this.productsExamen = p);
    console.log(this.productsOriginales);
    console.log(this.productsExamen);
  }

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified when this product is on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/