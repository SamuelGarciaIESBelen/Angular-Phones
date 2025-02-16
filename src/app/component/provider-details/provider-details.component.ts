import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { products } from '../../model/products';
import { Provider } from '../../model/providers';

import { ProviderService } from '../../service/provider.service';

import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-provider-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './provider-details.component.html',
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent {
    
  providerService: ProviderService = inject(ProviderService);
  
  provider: Provider | undefined;

  products = [...products];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));

    this.providerService.getProviders().subscribe(providerList => {
      this.provider = providerList.find(p => p.id === providerIdFromRoute);
    });

    this.products = products.filter(p => p.providerId === providerIdFromRoute);
  }
}
