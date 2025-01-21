import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

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
