import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../model/products';
import { Provider } from '../../model/providers';

import { ProviderService } from '../../service/provider.service';

import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './provider-details.component.html'
})
export class ProviderDetailsComponent {
    
  providerService: ProviderService = inject(ProviderService);
  productService: ProductService = inject(ProductService);
  
  provider: Provider | undefined;

  products: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));

    this.providerService.getProviders().subscribe(providerList => {
      this.provider = providerList.find(p => p.id === providerIdFromRoute);
    });

    this.productService.getAllProductsOriginales().subscribe(p => this.products = p.filter(p => p.providerId === providerIdFromRoute))
  }
}
