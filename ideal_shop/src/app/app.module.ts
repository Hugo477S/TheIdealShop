import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductInfoListComponent } from './product-info-list/product-info-list.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { FormsModule} from '@angular/forms';
import { CreateProductInfoComponent } from './create-product-info/create-product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductInfoListComponent,
    CreateProductComponent,
    CreateProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
