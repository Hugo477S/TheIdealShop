import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: "", redirectTo:'products', pathMatch:'full'},
  {path:'cart', component: CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
