import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-macro-form',
  templateUrl: './macro-form.component.html',
  styleUrl: './macro-form.component.css'
})
export class MacroFormComponent implements OnInit {
  constructor(private productService: ProductService){}

  ngOnInit(): void {
   // this.getProductsByMacros();
  }

  ngAfterViewInit() {
    this.butCroissant = Array.from(document.getElementsByClassName("btn-default"));
    this.cat = Array.from(document.getElementsByClassName("inp"));
  }

  @Output() childEmitter: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  dataFromNav: string;

  @Input() inputFromParent:any[];

  verificatorcatPlat: string = "";


  ngOnChanges(){ // S'active quand @Input change
    if (this.verificatorcatPlat == "") {
      this.verificatorcatPlat = this.inputFromParent[1];
    } else {
      if(this.verificatorcatPlat == this.inputFromParent[1]) {
        this.minCalo = "";
        this.maxCalo = "";
        this.minCarb = "";
        this.maxCarb ="";
        this.minProt ="";
        this.maxProt ="";
        this.minFib ="";
        this.maxFib ="";  
      }
      this.verificatorcatPlat = this.inputFromParent[1];
    }    
    this.getMinMax(this.inputFromParent[0]);
  }

    // Valeurs des inputs, any au lieu de nb pour pouvoir réinitialiser le placeholder avec ""
    minCalo: any;
    maxCalo: any;
    minCarb: any;
    maxCarb: any;
    minProt: any;
    maxProt: any;
    minFib: any;
    maxFib: any;
  
    // variables intermédiaires pour calcul des placeholders
    recMinCalo: number = 1000;
    recMaxCalo: number = 0;
    recMinCarb: number = 1000;
    recMaxCarb: number = 0;
    recMinProt: number = 1000;
    recMaxProt: number = 0;
    recMinFib: number = 1000;
    recMaxFib: number = 0;
  
    // Placeholder indicatif
    maximalCalo!: number;
    minimalCalo!: number;
    maximalProt!: number;
    minimalProt!: number;
    maximalCarb!: number;
    minimalCarb!: number;
    maximalFib!: number;
    minimalFib!: number;

    products!: Product[];
    intervals!: Element[];
    cat!: Element[];
    butCroissant!: Element[];
    cart!: any[];
    
    SatuClicked: Boolean = false;
    FatClicked: Boolean = false;
    SugarClicked: Boolean = false;
    SodiumClicked: Boolean = false;

    onCalorieFilterClick() {
      this.onMacrosFilterClick(this.minCalo, this.maxCalo, this.recMinCalo, this.recMaxCalo);
    }
    onCarbFilterClick() {
      this.onMacrosFilterClick(this.minCarb, this.maxCarb, this.recMinCarb, this.recMaxCarb);
    }
    onProtFilterClick() {
      this.onMacrosFilterClick(this.minProt, this.maxProt, this.recMinProt, this.recMaxProt);
    }
    onFiberFilterClick() {
      this.onMacrosFilterClick(this.minFib, this.maxFib, this.recMinFib, this.recMaxFib);
    }
  
    onMacrosFilterClick(numberMin: Number, numberMax: Number,
      recMin: Number, recMax: Number
    ) {
      recMin = numberMin ? numberMin : 1000;
      recMax = numberMax ? numberMax : 0;
      this.getProductsByMacros();
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

  getProductsByMacros() { 
    this.productService.getProductsByMacros(this.inputFromParent[1], this.minCalo, this.maxCalo,
      this.minCarb, this.maxCarb, this.minProt, this.maxProt,
        this.minFib, this.maxFib).subscribe(data => {
          this.products = data;
          this.getMinMax(data);
          this.childEmitter.emit(data); // A donner a product-list pour réorganiser les produits
    })
  }

  randomizeProductsOrder(array: Product[]) {
    for (let i = array.length - 1; i>0 ; i--) {
      let k = Math.floor(Math.random()*(i+1));
      let t = array[i];
      array[i] = array[k];
      array[k] = t;
    }
    this.childEmitter.emit(this.products);
    return array;  
    }

  lessSugar(){
    
    if(!this.SugarClicked) {
    let inter = this.inputFromParent[0].sort(this.compareSugar);
    this.childEmitter.emit(inter);
    } else {
      let inter = this.inputFromParent[0];
      this.randomizeProductsOrder(inter);
      this.childEmitter.emit(inter);
    }
    
    this.SugarClicked = !this.SugarClicked;
    
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

  lessFat(){
    if(!this.FatClicked) {
      let inter = this.inputFromParent[0].sort(this.compareFat);
      
      this.childEmitter.emit(inter);
    } else {
      let inter = this.inputFromParent[0];
      this.randomizeProductsOrder(inter);
      this.childEmitter.emit(inter);
    }
    this.FatClicked = !this.FatClicked;
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

  lessSatu(){
    if(!this.SatuClicked) {
      let inter = this.inputFromParent[0].sort(this.compareSatu);
      this.childEmitter.emit(inter);
    } else {
      let inter = this.inputFromParent[0];
      this.randomizeProductsOrder(inter);
      this.childEmitter.emit(inter);
    }
    this.SatuClicked = !this.SatuClicked;
    
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

  lessSodium(){
    if(!this.SodiumClicked) {
      let inter = this.inputFromParent[0].sort(this.compareSod);
      this.childEmitter.emit(inter);
    } else {
      let inter = this.inputFromParent[0];
      this.randomizeProductsOrder(inter);
      this.childEmitter.emit(inter);
    }
    this.SodiumClicked = !this.SodiumClicked;
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

  // Style

  changeButCroissant(event: any) {
    let index = this.butCroissant.indexOf(event.target);
    for(let i=0; i<this.butCroissant.length; i++) {
      if(this.butCroissant.indexOf(this.butCroissant[i]) == index && this.butCroissant[i].className == "btn-default") {
        this.butCroissant[i].className = "btn-change";
      } else {
        this.butCroissant[i].className = "btn-default";
      }
    }
  }
}
