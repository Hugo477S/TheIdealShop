import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NewArticleComponent } from '../new-article/new-article.component';
import { NewLaitageFormComponent } from '../new-laitage-form/new-laitage-form.component';
import { NewMacroFormComponent } from '../new-macro-form/new-macro-form.component';
import { NewNavigProductComponent } from '../new-navig-product/new-navig-product.component';
import { NewProductComponent } from '../new-product/new-product.component';
import { NewTutorialComponent } from '../new-tutorial/new-tutorial.component';
import { NewVitFormComponent } from '../new-vit-form/new-vit-form.component';
import { Pm } from '../pm';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductVitamin } from '../productVitamin';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-new-products-list',
  standalone: true,
  imports: [CommonModule, NewArticleComponent, NewProductComponent, NewMacroFormComponent, NewLaitageFormComponent,
    NewNavigProductComponent, NewVitFormComponent, NewTutorialComponent
    ],
  templateUrl: './new-products-list.component.html',
  styleUrls: ['./new-products-list.component.css', '../shared.css']
})
export class NewProductsListComponent implements OnInit {

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
  explication: Boolean = true;

  SatuClicked: Boolean = false;
  FatClicked: Boolean = false;
  SugarClicked: Boolean = false;
  SodiumClicked: Boolean = false;

  @Output() childEmitter: EventEmitter<any[]> = new EventEmitter<any[]>(); // Array of products puis catPlat

  @Input() vitOrderFromNavig:Boolean;
  @Input() vitOrderFromVit:Boolean;

  ngOnChanges(){
    this.vitOrder = this.vitOrderFromNavig;
  }

  constructor(private productService: ProductService,
    private router: Router
  ) {}

  catPlatHandler(catPlat: string) {
    this.catPlat = catPlat; 
    
    this.productService.getProductsByCat(this.catPlat).subscribe(data=> {
      if(this.catPlat == "") {
        data = [];
      }
      this.products = data;
      this.childEmitter.emit([data, this.catPlat]);
      })
  }

  vitOrderFromNav(vitOrder: Boolean) {
    this.vitOrder = vitOrder;
    console.log(this.vitOrder);
  }
  vitOrderFromVita(vitOrder: Boolean) {
    this.vitOrder = vitOrder;
    console.log(this.vitOrder);
  }


  receiveProductsFromVit($event:any[]) {
    
    if(this.vitOrder) {
      this.productsA = $event[0];
      this.productsB = $event[1];
      this.productsC = $event[2];
      this.productsE = $event[3];
      this.productsK = $event[4];
      this.productsAverageVit = $event[5];
    } else {
      this.catPlatHandler(this.catPlat);
    }
  }

  receiveProductsFromLaitage($event:any[]) {
    this.products = $event;
  }

  receiveProductsFromMacros($event:any[]) {
    this.products = $event;
  }

  ngOnInit(): void {
      this.cat = Array.from(document.getElementsByClassName("cat"));   
  }

}


