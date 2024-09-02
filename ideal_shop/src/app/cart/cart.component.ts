import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cart!: any[];
  total!: number;
  colNumber!: number;


  ngOnInit(): void {
    this.total = 0;
  
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
    for(let i=0; i<this.cart.length; i++) {
      this.total += this.cart[i].quantity * this.cart[i].product.price;
    }
}


  generatePDF() {
    this.colNumber = 30;
		// Create a new PDF document.
		const doc = new jsPDF();

		// Add content to the PDF.
		doc.setFontSize(16);
    doc.text('Votre panier' , 10, 10);
		doc.setFontSize(12);

		// Create a table using `jspdf-autotable`.
		const headers = [['Produit', 'Prix', 'Quantité']];
		const data : any = [];

    for(let i=0; i<this.cart.length; i++){
      data.push([this.cart[i].product.name, this.cart[i].product.price + ' $', this.cart[i].quantity])
      this.colNumber += 10;
    }

		autoTable(doc, {
			head: headers,
			body: data,
			startY: 20, // Adjust the `startY` position as needed.
		});

    doc.text(
      "Votre total s'élève à " + this.total + " $", 10, this.colNumber
    );
   
    localStorage.removeItem("cart");
		// Save the PDF.
		doc.save('table.pdf');
	}
}
