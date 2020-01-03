import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

import { ProductService } from '../../../../core/http/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query) {
    console.log(query);
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

}
