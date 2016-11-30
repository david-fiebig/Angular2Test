import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string;
    products: IProduct[];

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    onNotify(message: string): void {
        alert(message);
    }
}
