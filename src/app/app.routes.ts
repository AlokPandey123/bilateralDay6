import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ComplainComponent } from './Components/complain/complain.component';
import { ProductsComponent } from './Components/products/products.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"complain",component:ComplainComponent},
    {path:"products",component:ProductsComponent}

];
