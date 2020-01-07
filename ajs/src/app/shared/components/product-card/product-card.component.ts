import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ShoppingCartService } from 'src/app/core/http/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Input() showActions = true;
  @Input() shoppingCart;

  constructor(
    private cartService: ShoppingCartService
  ) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) { return 0; }
    const item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }
}
