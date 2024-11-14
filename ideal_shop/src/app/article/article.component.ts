import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achat } from '../achat';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{

  @Output() newItemEvent = new EventEmitter<string>();

  @Input() product: Product;
  @Input() index: number;

  constructor(private productService: ProductService,
    private router: Router
  ) {}

  cart!: any;
  achat: Achat = new Achat();


  ngOnInit(): void {
    this.cart = [];
    
  }



  details(id: number){
    this.router.navigate(['product/', id]);

  }

  buy(id: number){
    this.productService.getProduct(id).subscribe(data => {

      this.achat.product = data;
      this.achat.quantity =  1;

/*
      for(let ligne of this.cart) {
        if(ligne.product.id === achat.product.id) {
          ligne.quantity++;
          localStorage.setItem("cart", JSON.stringify([...this.cart]));
          return;
        }
      }
*/

      const cartou = [
        ...this.cart,
         this.achat];

      this.cart = cartou;

      this.achat = {} as any;

      console.log(cartou);
      localStorage.setItem("cart", JSON.stringify([...this.cart]));

      
    })
  }

  cartPage(){
    this.router.navigate(['', 'cart']);
  }
}
