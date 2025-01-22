import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewProductsListComponent } from './new-products-list/new-products-list.component';


const routes: Routes = [
  {path: 'products', component: NewProductsListComponent},
  {path: 'product/:id', component: NewProductComponent},
  {path: "", redirectTo:'products', pathMatch:'full'},
  {path:'cart', component: CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
