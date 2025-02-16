import { Component } from '@angular/core';

import { products } from '../../model/products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent {
  products = [...products];

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