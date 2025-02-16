import { Routes } from "@angular/router";
import { ProductDetailsComponent } from "./app/component/product-details/product-details.component";
import { ProductListComponent } from "./app/component/product-list/product-list.component";
import { ProviderListComponent } from "./app/component/provider-list/provider-list.component";
import { ProviderDetailsComponent } from "./app/component/provider-details/provider-details.component";

const routeConfig: Routes = [
    {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
    },
    {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
    },
    {
    path: 'providers',
    component: ProviderListComponent,
    title: 'Providers'
    },
    {
    path: 'providers/:providerId',
    component: ProviderDetailsComponent,
    title: 'Provider details'
    }
];

export default routeConfig;