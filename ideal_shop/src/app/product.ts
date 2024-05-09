import { ProductInfo } from "./product-info";

export class Product {
    id!: number;
    name!: string;
    price!: number;
    notation!: string;
    productInfo!: ProductInfo;
    constructor() {
        // No assignment or initialization needed
        
        }
}
