import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Provider } from '../../model/providers';
import { ProviderService } from '../../service/provider.service';

@Component({
  selector: 'app-provider-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './provider-list.component.html'
})
export class ProviderListComponent {
  
  providerService: ProviderService = inject(ProviderService);
  
  providers: Provider[] = [];

  constructor() {}

  ngOnInit() {
    this.providerService.getProviders().subscribe((providersList) => {
      this.providers = providersList;
    });
  }
}
