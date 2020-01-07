import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/core/http/category.service';
import { ProductService } from 'src/app/core/http/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/core/http/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products = [];
  filteredProducts = [];
  categories$;
  category: string;
  cart: any;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService
  ) { }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(cart => this.cart = cart);
    this.productService.getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category && this.products) ?
          this.products.filter(p => p.category === this.category) : this.products;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
