import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductVitamin } from '../productVitamin';


@Component({
  selector: 'app-vit-form',
  templateUrl: './vit-form.component.html',
  styleUrl: './vit-form.component.css'
})
export class VitFormComponent implements OnInit {
  constructor(
  ) {}

  @Output() productsVit: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input() inputFromParent:any[];

  products!: Product[];
  productVitamin: ProductVitamin = new ProductVitamin;


ngOnInit(): void {

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
    this.productsA = this.products.sort(this.compareA); // Doesnt work xitout the slice !?
    console.log(this.productsA);
    this.productsB = this.products.sort(this.compareB);
    this.productsC = this.products.sort(this.compareC);
    this.productsE = this.products.sort(this.compareE);
    this.productsK = this.products.sort(this.compareK);
    this.productsAverageVit = this.products.sort(this.compareVitAverage);
    this.productsA = this.retireClones(this.productsA);
    this.productsB = this.retireClones(this.productsB);
    this.productsC = this.retireClones(this.productsC);
    this.productsE = this.retireClones(this.productsE);
    this.productsK = this.retireClones(this.productsK);
    this.productsAverageVit = this.retireClones(this.productsAverageVit);
    this.productsVit.emit([this.productsA, this.productsB, this.productsC, this.productsE, this.productsK, this.productsAverageVit]);
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




