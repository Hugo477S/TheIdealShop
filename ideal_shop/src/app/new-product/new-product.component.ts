import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css', '../shared.css']
})
export class NewProductComponent implements OnInit {

  id!: number;
  product!: Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = new Product();
    this.productService.getProduct(this.id).subscribe(data => {
      this.product = data;
      
  })
}
}
