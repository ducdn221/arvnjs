import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() cartCount: number;

  constructor() { }

  ngOnInit() {
  }

}
