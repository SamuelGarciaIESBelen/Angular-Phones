import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Provider } from '../model/providers';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providers: Provider[] = [];
  
  private url = "assets/providers.json";

  constructor(private http: HttpClient) {}

  getProviders() {
    return this.http.get<Provider[]>(this.url);
  }
}
