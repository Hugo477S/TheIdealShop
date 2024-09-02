import { Component, OnInit } from '@angular/core';
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

  vitOrder!: Boolean;
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

  minCalo: number;
  maxCalo: number;
  minCarb: number;
  maxCarb: number;
  minProt: number;
  maxProt: number;
  minFib: number;
  maxFib: number;

  recMinCalo: number = 1000;
  recMaxCalo: number = 0;
  recMinCarb: number = 1000;
  recMaxCarb: number = 0;
  recMinProt: number = 1000;
  recMaxProt: number = 0;
  recMinFib: number = 1000;
  recMaxFib: number = 0;

  maximalCalo!: number;
  minimalCalo!: number;
  maximalProt!: number;
  minimalProt!: number;
  maximalCarb!: number;
  minimalCarb!: number;
  maximalFib!: number;
  minimalFib!: number;

  constructor(private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.vitOrder = false;
      this.getProducts();
      this.cat = Array.from(document.getElementsByClassName("cat"));
      this.cart = [];
  }

  orderByVit() {
    this.vitOrder = !this.vitOrder;
  }

  changeCat(event: any) {
    let index = this.cat.indexOf(event.target);
    for(let i=0; i<this.cat.length; i++) {
      if(this.cat.indexOf(this.cat[i]) == index && this.cat[i].className == "cat btn-default") {
        this.cat[i].className = "cat btn-change";
      } else {
        this.cat[i].className = "cat btn-default";
      }
    }
  }

  changeButCroissant(event: any) {
    let index = this.butCroissant.indexOf(event.target);
    for(let i=0; i<this.butCroissant.length; i++) {
      if(this.butCroissant.indexOf(this.butCroissant[i]) == index && this.butCroissant[i].className == "butCroissant btn-default") {
        this.butCroissant[i].className = "butCroissant btn-change";
      } else {
        this.butCroissant[i].className = "butCroissant btn-default";
      }
    }
  }

  private getProducts() {
    this.productService.getProductsList().subscribe(data => {
      this.products = data;
    })
  }

  details(id: number){
    this.router.navigate(['product/', id]);
  }

  cartPage(){
    this.router.navigate(['', 'cart']);
  }

  buy(id: number){
    this.productService.getProduct(id).subscribe(data => {
      let achat = {
        product: data,
        quantity: 1
      };

      for(let i=0; i<this.cart.length; i++){
        console.log(this.cart[i].quantity);
        if(achat.product.id == this.cart[i].product.id) {
          this.cart[i].quantity = this.cart[i].quantity + 1;
          localStorage.setItem("cart", JSON.stringify(this.cart));
          return;
        }
      }

      this.cart.push(achat);
      console.log(this.cart);
      localStorage.setItem("cart", JSON.stringify(this.cart)); // doesnt work on chrome !
    })
  }


  getproductsByCat(event: any){
    if (this.catPlat == event.target.id) {
      this.catPlat = "";
      this.getProducts();
    } else {
      this.catPlat = event.target.id;
      this.productService.getProductsByCat(event.target.id).subscribe(data => {
      this.products = data;
      this.getMinMax(data);
      this.intervals = Array.from(document.getElementsByClassName("interval"));
      this.butCroissant = Array.from(document.getElementsByClassName("butCroissant"));
      
      if(this.catPlat == 'legume' || this.catPlat == 'fruit') {
        this.productsA = data.slice().sort(this.compareA); // Doesnt work xitout the slice !?
        this.productsB = data.slice().sort(this.compareB);
        this.productsC = data.slice().sort(this.compareC);
        this.productsE = data.slice().sort(this.compareE);
        this.productsK = data.slice().sort(this.compareK);
        this.productsAverageVit = data.slice().sort(this.compareVitAverage);
      }
      })
    }
  }

  getCatPlat(event: any){
    this.getproductsByCat(event.target.id);
  }

  getProductsListMacros(){
    this.productService.getProductsListMacros(this.catPlat, this.minCalo, this.maxCalo,
      this.minCarb, this.maxCarb, this.minProt, this.maxProt,
      this.minFib, this.maxFib).subscribe(data => {
        this.products = data;
        this.getMinMax(data);
      })
  }

  getMinMax(array: any){
    for (let i=0; i<array.length; i++){
      if(array[i].pm.calo > this.recMaxCalo) {
        this.recMaxCalo = array[i].pm.calo
      }
      if(array[i].pm.calo < this.recMinCalo) {
        this.recMinCalo = array[i].pm.calo
      }
      if(array[i].pm.carb > this.recMaxCarb) {
        this.recMaxCarb = array[i].pm.carb
      }
      if(array[i].pm.carb < this.recMinCarb) {
        this.recMinCarb = array[i].pm.carb
      }
      if(array[i].pm.prot > this.recMaxProt) {
        this.recMaxProt = array[i].pm.prot
      }
      if(array[i].pm.prot < this.recMinProt) {
        this.recMinProt = array[i].pm.prot
      }
      if(array[i].pm.fib > this.recMaxFib) {
        this.recMaxFib = array[i].pm.fib
      }
      if(array[i].pm.fib < this.recMinFib) {
        this.recMinFib = array[i].pm.fib
      }
    }
  this.minimalCalo = this.recMinCalo;
  this.maximalCalo = this.recMaxCalo;
  this.minimalCarb = this.recMinCarb;
  this.maximalCarb = this.recMaxCarb;
  this.minimalProt = this.recMinProt;
  this.maximalProt = this.recMaxProt;
  this.minimalFib = this.recMinFib;
  this.maximalFib = this.recMaxFib;

this.recMinCalo = 1000;
this.recMaxCalo = 0;
this.recMinCarb = 1000;
this.recMaxCarb = 0;
this.recMinProt = 1000;
this.recMaxProt = 0;
this.recMinFib = 1000;
this.recMaxFib = 0; 
  }


  onChangeminCal(value: any) { 
    this.recMinCalo = value.target.value;
    if (this.minCalo >= 0 && this.maxCalo > 0) {
      this.getProductsListMacros();
    } else if (!this.minCalo && !this.maxCalo) {
      this.recMinCalo = 1000; 
      this.recMaxCalo = 0;
      this.getProductsListMacros();
    }
  } 
  
  onChangemaxCal(value: any) { 
  this.recMaxCalo = value.target.value;
  if (this.minCalo >= 0 && this.maxCalo > 0){
    this.getProductsListMacros();
  } else if(!this.minCalo && !this.maxCalo) {
    this.recMaxCalo = 0;
    this.recMinCalo = 1000; 
    this.getProductsListMacros();
  }
  } 
  
  onChangeminCarb(value: any) { 
  this.recMinCarb = value.target.value;
  if (this.minCarb >= 0 && this.maxCarb > 0){
    this.getProductsListMacros();
  } else if (!this.minCarb && !this.maxCarb) {
    this.recMinCarb = 1000;
    this.recMaxCarb = 0;
    this.getProductsListMacros();
  }
  } 
  
  onChangemaxCarb(value: any) { 
  this.recMaxCarb = value.target.value;
  if (this.minCarb >= 0 && this.maxCarb > 0){
  this.getProductsListMacros();
  } else if(!this.minCarb && !this.maxCarb) {
    this.recMaxCarb = 0;
    this.recMinCarb = 1000;
    this.getProductsListMacros();
  } 
  } 
  
  onChangeminProt(value: any) { 
  this.recMinProt = value.target.value;
  if (this.minProt >= 0 && this.maxProt > 0){
    this.getProductsListMacros();
  } else if(!this.minProt && !this.maxProt) {
    this.recMinProt = 1000;
    this.recMaxProt = 0;
    this.getProductsListMacros();
  }
  } 
  
  onChangemaxProt(value: any) { 
  this.recMaxProt = value.target.value;
  if (this.minProt >= 0 && this.maxProt > 0){
  this.getProductsListMacros();
  }  else if (!this.minProt && !this.maxProt) {
    this.recMinProt = 1000;
    this.recMaxProt = 0;
    this.getProductsListMacros();
  }
  } 
  
  onChangeminFib(value: any) { 
  this.recMinFib = value.target.value;
  if (this.minFib >= 0 && this.maxFib > 0){
    this.getProductsListMacros();
  } else if(!this.minFib && !this.maxFib) {
    this.recMaxFib = 0;
    this.recMinFib = 1000;
    this.getProductsListMacros();
  } 
  } 
  
  onChangemaxFib(value: any) { 
  this.recMaxFib = value.target.value;
  if (this.minFib >= 0 && this.maxFib > 0){
  this.getProductsListMacros();
  } else if(!this.minFib && !this.maxFib) {
    this.recMaxFib = 0;
    this.recMinFib = 1000;
    this.getProductsListMacros();
  }  
  } 

  lessSugar(){
    this.products.sort(this.compareSugar);
  }

  lessFat(){
    this.products.sort(this.compareFat);
  }

  lessSatu(){
    this.products.sort(this.compareSatu);
  }

  lessSodium(){
    this.products.sort(this.compareSod);
  }


compareSugar( a:Product, b:Product ) {
  if ( a.pm.sug < b.pm.sug ){
    return -1;
  }
  if ( a.pm.sug > b.pm.sug ){
    return 1;
  }
  return 0;
}


compareFat( a:Product, b:Product ) {
  if ( a.pm.fat < b.pm.fat ){
    return -1;
  }
  if ( a.pm.fat > b.pm.fat ){
    return 1;
  }
  return 0;
}

compareSatu( a:Product, b:Product ) {
  if ( a.pm.satu < b.pm.satu ){
    return -1;
  }
  if ( a.pm.satu > b.pm.satu ){
    return 1;
  }
  return 0;
}

compareSod( a:Product, b:Product ) {
  if ( a.pm.sod < b.pm.sod ){
    return -1;
  }
  if ( a.pm.sod > b.pm.sod ){
    return 1;
  }
  return 0;
}

compareA( x:Product, y:Product ) {
  if ( x.productVitamin.a > y.productVitamin.a ){
    return -1;
  }
  if ( x.productVitamin.a < y.productVitamin.a ){
    return 1;
  }
  return 0;
}

compareB( x:Product, y:Product ) {
  if ( x.productVitamin.b > y.productVitamin.b ){
    return -1;
  }
  if ( x.productVitamin.b < y.productVitamin.b ){
    return 1;
  }
  return 0;
}

compareC( x:Product, y:Product ) {
  if ( x.productVitamin.c > y.productVitamin.c ){
    return -1;
  }
  if ( x.productVitamin.c < y.productVitamin.c ){
    return 1;
  }
  return 0;
}

compareE( a:Product, b:Product ) {
  if ( a.productVitamin.e > b.productVitamin.e ){
    return -1;
  }
  if ( a.productVitamin.e < b.productVitamin.e ){
    return 1;
  }
  return 0;
}

compareK( a:Product, b:Product ) {
  if ( a.productVitamin.k > b.productVitamin.k ){
    return -1;
  }
  if ( a.productVitamin.k < b.productVitamin.k ){
    return 1;
  }
  return 0;
}

compareVitAverage( a:Product, b:Product ) {
  if ( a.productVitamin.a + a.productVitamin.b + a.productVitamin.c 
    + a.productVitamin.e + a.productVitamin.k > b.productVitamin.a
    + b.productVitamin.b + b.productVitamin.c 
    + b.productVitamin.e + b.productVitamin.k) {
    return -1;
  }
  if ( a.productVitamin.a + a.productVitamin.b + a.productVitamin.c 
    + a.productVitamin.e + a.productVitamin.k < b.productVitamin.a
    + b.productVitamin.b + b.productVitamin.c 
    + b.productVitamin.e + b.productVitamin.k ) {
    return 1;
  }
  return 0;
}
}
