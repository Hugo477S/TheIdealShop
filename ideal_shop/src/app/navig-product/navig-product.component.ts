import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navig-product',
  templateUrl: './navig-product.component.html',
  styleUrl: './navig-product.component.css'
})
export class NavigProductComponent implements OnInit {

  constructor(private productService: ProductService){}

  @Output() dataFromNav: EventEmitter<string> = new EventEmitter<string>();

  catPlat !: string;
  cat!: Element[];
  products!: Product[];


  ngOnInit(): void {
    this.cat = Array.from(document.getElementsByClassName("btn-default"));
}

  ngAfterViewInit() {
    this.cat = Array.from(document.getElementsByClassName("btn-default"));
  }

  getCategory(event: any){
    if (this.catPlat == event.target.id) {
    this.catPlat = "";    
    } else {
    this.catPlat = event.target.id;
    }
    this.dataFromNav.emit(this.catPlat);
  }

  changeCat(event: any) {
    let index = this.cat.indexOf(event.target);
    for(let i=0; i<this.cat.length; i++) {
      if(this.cat.indexOf(this.cat[i]) == index && this.cat[i].className == "btn-default") {
        this.cat[i].className = "btn-change";
      } else {
        this.cat[i].className = "btn-default";
      }
    }
  }
}
