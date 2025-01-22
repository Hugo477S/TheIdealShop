import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-laitage-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-laitage-form.component.html',
  styleUrls: ['./new-laitage-form.component.css', '../shared.css']
})

export class NewLaitageFormComponent implements OnInit{

  constructor(private productService: ProductService){}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.butCroissant = Array.from(document.getElementsByClassName("btn-default"));
  }

  butCroissant!: Element[];

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

    yaourt: Boolean = false;
    fromage: Boolean = false;
    textLaitage: string;

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
  }

  yaourtClick(){
    this.yaourt = true;
    this.fromage = false;
    this.onlyYogurt(this.productsAllLaitages);
  }

  cheeseClick(){
    this.fromage = true;
    this.yaourt = false;
    this.onlyCheese(this.productsAllLaitages);
  }

  onlyYogurt(array: Product[]) {
    array = this.productsAllLaitages.filter(product => {
      return ((product.name.toLowerCase()).includes("yaourt") || (product.name.toLowerCase()).includes("boisson lactée")
    || (product.name.toLowerCase()).includes("petits suisses")
    );
    })
    this.laitProds.emit(array);
    return array;
  }


  onlyCheese(array: Product[]) {
    array = this.productsAllLaitages.filter(product => {
      return (!(product.name.toLowerCase()).includes("yaourt") && !(product.name.toLowerCase()).includes("boisson lactée")
      && !(product.name.toLowerCase()).includes("petits suisses")
    );
    })
    this.laitProds.emit(array);
    return array;
  }



noFat(array: Product[]){
  if(this.yaourt) {
    array = this.products.filter(product => {
      return (((product.pm.fat * (product.pm.mass / 100)) / product.pm.mass) * 100) < 3; 
    })
  } else if(this.fromage) {
    array = this.products.filter(product => {
      return (((product.pm.fat * (product.pm.mass / 100)) / product.pm.mass) * 100) < 20; 
    })
  }
  return array;
}

moreCalcium(array: Product[]){
  if(this.yaourt) {
    array = this.products.filter(product => {
      return (product.pmin.cal >= 15 && product.pmin.pho >= 3); 
     })
  } else if(this.fromage) {
    array = this.products.filter(product => {
      return (product.pmin.cal >= 50 && product.pmin.pho >= 50); 
     })
  }
   return array;
}     

moreVitamins(array: Product[]){
  if(this.yaourt) {
    array = this.products.filter(product => {
      return product.productVitamin.d > 0; 
     })
  } else if(this.fromage) {
    array = this.products.filter(product => {
      return product.productVitamin.e > 4; 
     })
  }

   return array;
}


generalSearch() {

  let inter;
  let interTwo:Product[];

  if(this.yaourt) {
     interTwo = this.onlyYogurt(this.productsAllLaitages);
  } else {
     interTwo = this.onlyCheese(this.productsAllLaitages);
  }

  if (this.oligo) {
    if (this.degresses) {
      if (this.vitamin) {
      inter = this.moreVitamins(this.noFat(this.moreCalcium(interTwo)))
      this.laitProds.emit(inter);
      return;
      }
      inter = this.noFat(this.moreCalcium(interTwo))
      this.laitProds.emit(inter);
      return;
    }
    inter = this.moreCalcium(interTwo)
    this.laitProds.emit(inter);
    return;
} else if (this.degresses) {
    if(this.vitamin) {
      inter = this.noFat(this.moreVitamins(interTwo))
      this.laitProds.emit(inter);
      return;
    }
    inter =  this.noFat(interTwo)
    this.laitProds.emit(inter);
    return;
} else if (this.vitamin) {
  inter = this.moreVitamins(interTwo);
  this.laitProds.emit(inter);
  return;
} else {
  inter = interTwo;
  this.laitProds.emit(inter);

}

}

onCalciumClick() {
this.oligo = !this.oligo;
this.generalSearch();
}
onFatClick() {
this.degresses = !this.degresses;
this.generalSearch();
}
onVitClick() {
this.vitamin = !this.vitamin;
this.generalSearch();
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

      // Filtrer ici selon yaourt ou fromage

      if(this.yaourt) {
        data = data.filter(product => {
          return ((product.name.toLowerCase()).includes("yaourt") || (product.name.toLowerCase()).includes("boisson lactée")
        || (product.name.toLowerCase()).includes("petits suisses")
        );
        });
      } else {
        data = data.filter(product => {
          return (!(product.name.toLowerCase()).includes("yaourt") && !(product.name.toLowerCase()).includes("boisson lactée")
          && !(product.name.toLowerCase()).includes("petits suisses")
        );
        })
      }
        this.products = data;
        this.productsAllLaitages = data;
        this.getMinMax(data);
        if(this.degresses || this.oligo || this.vitamin) {
          this.generalSearch();
        } else {
          this.laitProds.emit(data); 
        }      
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


