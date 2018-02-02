import { Component } from "@angular/core";
//pipes: uppercase,lowercase,titlecase,currency,date and json. async
@Component({
    selector: 'app-product-list',
    template: `<h1>Products</h1>
    
    <div class="col-md-8">
        <div class="well" *ngFor="let product of products">
            <h3>{{product.brand | uppercase}} {{product.model | lowercase}}</h3>
            <div> {{product.price | currency}}</div>
            <input [disabled]="true" type="checkbox" [checked]="product.inStock"/>
            <div>{{product.lastUpdated | date:'dd-MMM-yyyy hh:mm'}}</div>
            <hr/>
        </div>
    </div>
    `
})
export class ProductListComponent {
    products: any[];

    constructor() {
        this.products = [{ id: 1, brand: "Nokia", model: "N8", price: 400, inStock: true, lastUpdated: Date.now() },
        { id: 2, brand: "Apple", model: "Iphone8", price: 800, inStock: true, lastUpdated: Date.now() },
        { id: 3, brand: "Samsung", model: "S8", price: 1000, inStock: false, lastUpdated: Date.now() }];
    }
}