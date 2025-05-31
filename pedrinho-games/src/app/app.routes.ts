import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'produtos', component: ProductsComponent},
    {path: 'contato', component: ContactComponent},
    {path: 'produtos/:slug', component: ProductComponent }
];

