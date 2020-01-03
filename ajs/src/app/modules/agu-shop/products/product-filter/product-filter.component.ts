import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/core/http/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Input() category: string;
  categories$;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
  }

}
