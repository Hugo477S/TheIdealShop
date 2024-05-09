import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-info-list',
  templateUrl: './product-info-list.component.html',
  styleUrl: './product-info-list.component.css'
})
export class ProductInfoListComponent implements OnInit{

  productInfos!: ProductInfo[];

  constructor(private productInfoService: ProductInfoService){}

  ngOnInit(): void {
    this.getProductInfos();
    }

  private getProductInfos() {
    this.productInfoService.getProductInfosList().subscribe(data => {
      this.productInfos = data;
    })
  }
}
