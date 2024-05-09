import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateProductInfoComponent } from './create-product-info/create-product-info.component';
import { ProductInfoListComponent } from './product-info-list/product-info-list.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'product-info', component: ProductInfoListComponent},
  {path: 'create-product-info', component: CreateProductInfoComponent},
  {path: '', redirectTo: 'productInfos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
