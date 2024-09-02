import { PMin } from "./p-min";
import { Pm } from "./pm";
import { ProductVitamin } from "./productVitamin";

export class Product {
    id: number;
    name: string;
    price: number;
    img: string;
    categoriePlat: string;
    productVitamin : ProductVitamin
    pm: Pm;
    pmin: PMin;

    constructor(){

    }
}
