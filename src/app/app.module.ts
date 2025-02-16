import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAlertsComponent } from './component/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CartComponent } from './component/cart/cart.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ShippingComponent } from './component/shipping/shipping.component';
import { ProviderListComponent } from './component/provider-list/provider-list.component';
import { ProviderDetailsComponent } from './component/provider-details/provider-details.component';

@NgModule({ declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
        CartComponent,
        ShippingComponent,  
    ],
    bootstrap: [
        AppComponent
    ], imports: [BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: ProductListComponent },
            { path: 'products/:productId', component: ProductDetailsComponent },
            { path: 'cart', component: CartComponent },
            { path: 'shipping', component: ShippingComponent },
            { path: 'providers', component: ProviderListComponent },
            { path: 'providers/:providerId', component: ProviderDetailsComponent },
        ])], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/