import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-new-navig-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-navig-product.component.html',
  styleUrls: ['./new-navig-product.component.css', '../shared.css']
})
export class NewNavigProductComponent implements OnInit {

  constructor(private productService: ProductService){}

  @Output() dataFromNav: EventEmitter<string> = new EventEmitter<string>();
  @Output() vitOrderToParent: EventEmitter<Boolean> = new EventEmitter<Boolean>();


  catPlat !: string;
  cat!: Element[];
  products!: Product[];
  vitOrder: Boolean;


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
    if (event.target.id != "legume" || event.target.id != "fruit") {
      this.vitOrder = false;
      this.vitOrderToParent.emit(this.vitOrder);
    }
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


