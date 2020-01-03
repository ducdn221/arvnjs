import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../core/http/category.service';
import { ProductService } from '../../../../core/http/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = categoryService.getAll();

    this.id = route.snapshot.paramMap.get('id');
    if (this.id) {
      productService.getById(this.id).pipe(take(1)).subscribe(p =>  {
        this.product = p;
      });
    }
  }

  ngOnInit() {
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) { return; }
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

}
