import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'produtos', component: ProductsComponent},
    {path: 'contato', component: ContactComponent}
];
