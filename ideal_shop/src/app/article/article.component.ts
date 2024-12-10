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
    this.cart = JSON.parse(localStorage.getItem("cart") || '[]');
  }



  details(id: number){
    this.router.navigate(['product/', id]);

  }

  buy(id: number){
    this.cart = JSON.parse(localStorage.getItem("cart") || '[]');
    this.productService.getProduct(id).subscribe(data => {

      let achat = {product: data,quantity: 1};
      const cartou = this.cart;
      
      
      for(let ligne of cartou) {
        if(ligne.product.id === achat.product.id) {
          ligne.quantity++;
          localStorage.setItem("cart", JSON.stringify(cartou));
          return;
        }
      }
      cartou.push(achat);
      localStorage.setItem("cart", JSON.stringify(cartou));

/*



      const cartou = [
        ...this.cart,
         this.achat];

      this.cart = cartou;

      this.achat = {} as any;
*/

      
    })
  }

  cartPage(){
    this.router.navigate(['', 'cart']);
  }
}
