import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/http/category.service';
import { ProductService } from 'src/app/core/http/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];
  filteredProducts = [];
  categories$;
  category: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
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

}
