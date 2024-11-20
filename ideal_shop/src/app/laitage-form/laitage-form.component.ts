import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-laitage-form',
  templateUrl: './laitage-form.component.html',
  styleUrl: './laitage-form.component.css'
})
export class LaitageFormComponent implements OnInit {

  constructor(private productService: ProductService){}

  ngOnInit(): void {
  }

  products!: Product[];
  productsBis!: Product[];
  productsAllLaitages!: Product[];

    // Valeurs des inputs, any au lieu de nb pour pouvoir réinitialiser le placeholder avec ""
    minCalo: any;
    maxCalo: any;
    minOligo: any;
    maxOligo: any;
    minProt: any;
    maxProt: any;
    minVit: any;
    maxVit: any;

    a: any;
    b: any;
    c: any;
    d: any;
  
    // variables intermédiaires pour calcul des placeholders
    recMinCalo: number = 1000;
    recMaxCalo: number = 0;
    recMinOligo: number = 1000;
    recMaxOligo: number = 0;
    recMinProt: number = 1000;
    recMaxProt: number = 0;
    recMinVit: number = 1000;
    recMaxVit: number = 0;
  
    // Placeholder indicatif
    maximalCalo!: number;
    minimalCalo!: number;
    maximalProt!: number;
    minimalProt!: number;
    maximalOligo!: number;
    minimalOligo!: number;
    maximalVit!: number;
    minimalVit!: number;

    degresses: Boolean = false;
    oligo: Boolean = false;
    vitamin: Boolean = false;

    count: number = 0;

    @Output() laitProds: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  
    @Input() inputFromParent:any[];

 
    ngOnChanges(){
      this.count = this.count + 1;
      this.products = this.inputFromParent[0];
      this.getMinMax(this.inputFromParent[0]);
      if(this.count == 2) {
        this.productsAllLaitages = this.products;
      }
      console.log(this.productsAllLaitages);
    }

    noFat(){
    this.degresses = !this.degresses;
    if(this.degresses) {
      this.productsBis = this.products.filter(product => {
        return (((product.pm.fat * (product.pm.mass / 100)) / product.pm.mass) * 100) < 3; 
       })
       this.laitProds.emit(this.productsBis);
    } else {
      this.laitProds.emit(this.productsAllLaitages);
    }
  }

  generalSearch() {
    if (this.oligo) {
      this.productsBis = this.products.filter(product => {
        return (product.pmin.cal >= 15 && product.pmin.pho >= 3); 
       })
    }
  }

  moreCalcium(){
    this.oligo = !this.oligo;
    if(this.oligo) {
      this.productsBis = this.products.filter(product => {
        return (product.pmin.cal >= 15 && product.pmin.pho >= 3); 
       })
       this.laitProds.emit(this.productsBis);
    } else {
      this.laitProds.emit(this.productsAllLaitages);
    }
    
  }

  moreVitamins(){
    this.vitamin = !this.vitamin;
    if(this.vitamin) {
      this.productsBis = this.products.filter(product => {
        return product.productVitamin.d > 0; 
       })
       this.laitProds.emit(this.productsBis);
    } else {
      this.laitProds.emit(this.productsAllLaitages);
    }
  }


    onCalorieFilterClick() {
      this.onMacrosFilterClick(this.minCalo, this.maxCalo, this.recMinCalo, this.recMaxCalo);
    }

    onProtFilterClick() {
      this.onMacrosFilterClick(this.minProt, this.maxProt, this.recMinProt, this.recMaxProt);
    }

  
    onMacrosFilterClick(numberMin: Number, numberMax: Number,
      recMin: Number, recMax: Number
    ) {
      recMin = numberMin ? numberMin : 1000;
      recMax = numberMax ? numberMax : 0;
      this.getProductsByMacros();
    }

      getProductsByMacros() { 
    this.productService.getProductsByMacros(this.inputFromParent[1], this.minCalo, this.maxCalo,
      this.minProt, this.maxProt, this.a, this.b, this.c, this.d).subscribe(data => {
          this.products = data;
          this.getMinMax(data);
          this.laitProds.emit(data); // A donner a product-list pour réorganiser les produits
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
        if(array[i].pm.prot > this.recMaxProt) {
          this.recMaxProt = array[i].pm.prot
        }
        if(array[i].pm.prot < this.recMinProt) {
          this.recMinProt = array[i].pm.prot
        }
      }

    this.minimalCalo = this.recMinCalo;
    this.maximalCalo = this.recMaxCalo;
    this.minimalProt = this.recMinProt;
    this.maximalProt = this.recMaxProt;
  
    this.recMinCalo = 1000;
    this.recMaxCalo = 0;
    this.recMinProt = 1000;
    this.recMaxProt = 0;
  }

}
