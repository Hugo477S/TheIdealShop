import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-info',
  templateUrl: './create-product-info.component.html',
  styleUrl: './create-product-info.component.css'
})
export class CreateProductInfoComponent implements OnInit {
  productInfo: ProductInfo = new ProductInfo();
  constructor(private productInfoService: ProductInfoService,
    private router: Router
  ){}
  ngOnInit(): void {
      
  }

  saveProductInfo(){
    this.productInfoService.createProductInfo(this.productInfo).subscribe( data => {
    console.log(data);
    }, 
    error => console.log(error))
    }
    
    onSubmit(){
    console.log(this.productInfo);
    this.saveProductInfo();
    }
}
