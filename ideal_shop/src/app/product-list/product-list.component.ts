import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pm } from '../pm';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductVitamin } from '../productVitamin';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products!: Product[];
  intervals!: Element[];
  cat!: Element[];
  butCroissant!: Element[];
  cart!: any[];

  vitOrder: Boolean = false;
  productsA!: Product[];
  productsB!: Product[];
  productsC!: Product[];
  productsE!: Product[];
  productsK!: Product[];
  productsAverageVit!: Product[];

  pm: Pm = new Pm;
  productVitamin: ProductVitamin = new ProductVitamin;

  catPlat: string = "";

  SatuClicked: Boolean = false;
  FatClicked: Boolean = false;
  SugarClicked: Boolean = false;
  SodiumClicked: Boolean = false;


  @Output() childEmitter: EventEmitter<any[]> = new EventEmitter<any[]>(); // Array of products puis catPlat

  constructor(private productService: ProductService,
    private router: Router
  ) {}


  replaceProducts(array: Product[]) {
    this.products = array;
  }
/*
  replaceProductsFromVit(array: any[]) {
    this.vitOrder = !this.vitOrder;
    this.productsA = array[0];
    this.productsB = array[1];
    this.productsC = array[2];
    this.productsE = array[3];
    this.productsK = array[4];
    this.productsAverageVit = array[5];
  }
  */
  catPlatHandler(catPlat: string) {
    this.catPlat = catPlat;
    this.productService.getProductsByCat(this.catPlat).subscribe(data=> {
      this.products = data;
      this.childEmitter.emit([data, this.catPlat]);
    })
  }

  receiveProductsFromArticle($event: Product[]) {
    this.products = $event;
  }

  receiveProductsFromVit($event:any[]) {
    this.vitOrder = !this.vitOrder;
    this.productsA = $event[0];
    this.productsB = $event[1];
    this.productsC = $event[2];
    this.productsE = $event[3];
    this.productsK = $event[4];
    this.productsAverageVit = $event[5];

  }

  receiveProductsFromLaitage($event:any[]) {
    this.products = $event;
  }

  ngOnInit(): void {
      this.vitOrder = false;
      this.getProducts();
      this.cat = Array.from(document.getElementsByClassName("cat"));
      this.cart = [];
  }

/*
  cartPage(){
    this.router.navigate(['', 'cart']);
  }
*/
   private getProducts() {
     this.productService.getProductsList().subscribe(data => {
       this.products = data;
     })
   }


}
