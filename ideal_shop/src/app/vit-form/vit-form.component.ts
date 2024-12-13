import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductVitamin } from '../productVitamin';


@Component({
  selector: 'app-vit-form',
  templateUrl: './vit-form.component.html',
  styleUrls: ['./vit-form.component.css', '../shared.css']
})
export class VitFormComponent implements OnInit {
  constructor(
  ) {}

  @Output() productsVit: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() vitOrderFromVit: EventEmitter<Boolean> = new EventEmitter<Boolean>(); // Array of products puis catPlat

  @Input() inputFromParent:any[];

  products!: Product[];
  productVitamin: ProductVitamin = new ProductVitamin;


ngOnInit(): void {
  this.vitOrder = false;
}

ngOnChanges() {
  if(this.inputFromParent) {
    this.products = this.inputFromParent[0];
  }
}

vitOrder!: Boolean;
productsA!: Product[];
productsB!: Product[];
productsC!: Product[];
productsE!: Product[];
productsK!: Product[];
productsAverageVit!: Product[];




orderByVit() {
  
  this.vitOrder = !this.vitOrder;
  this.vitOrderFromVit.emit(this.vitOrder);
  if(this.vitOrder) {
    this.productsA = this.products.toSorted(this.compareA);
    this.productsB = this.products.toSorted(this.compareB);
    this.productsC = this.products.toSorted(this.compareC);
    this.productsE = this.products.toSorted(this.compareE);
    this.productsK = this.products.toSorted(this.compareK);


    this.productsAverageVit = this.products.sort(this.compareVitAverage);
    this.productsA = this.retireClones(this.productsA).splice(0,8);
    this.productsB = this.retireClones(this.productsB).splice(0,8);
    this.productsC = this.retireClones(this.productsC).splice(0,8);
    this.productsE = this.retireClones(this.productsE).splice(0,8);
    this.productsK = this.retireClones(this.productsK).splice(0,8);
    this.productsAverageVit = this.retireClones(this.productsAverageVit).splice(0,8);
  
    
  } else {
    this.products = this.inputFromParent[0];
  }

  
  this.productsVit.emit([this.productsA, this.productsB, this.productsC, this.productsE, this.productsK, this.productsAverageVit, this.vitOrder]);

    
}

retireClones(array: Product[]){
  let indexes = [];
  for (let i=0; i<array.length; i++) {
    let productName = array[i].name;
    let firstWord = productName.split(" ")[0];
    for (let j=i+1; j<array.length; j++) {
      let productNameJ = array[j].name;
      let firstWordJ = productNameJ.split(" ")[0];
      if(firstWordJ == firstWord) {
        indexes.push(j);
      }
    }
  }
  this.deleteClones(array, indexes);
  return array;
}

deleteClones(array: Product[], indexes: number[]) {
  indexes.forEach((index => {
    array.splice(index, 1);
  }))
  return array;
}

compareA( a:Product, b:Product ) {
if ( a.productVitamin.a > b.productVitamin.a ){
  return -1;
}
if ( a.productVitamin.a < b.productVitamin.a ){
  return 1;
}
return 0;
}

compareB( a:Product, b:Product ) {
if ( a.productVitamin.b > b.productVitamin.b ){
  return -1;
}
if ( a.productVitamin.b < b.productVitamin.b ){
  return 1;
}
return 0;
}

compareC( a:Product, b:Product ) {
if ( a.productVitamin.c > b.productVitamin.c ){
  return -1;
}
if ( a.productVitamin.c < b.productVitamin.c ){
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




