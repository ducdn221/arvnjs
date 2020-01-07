import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
  items: ShoppingCartItem[];

  get totalItemsCount() {
    let count = 0;
    for (const productId in this.items) {
      if (this.items.hasOwnProperty(productId)) {
        count += this.items[productId].quantity;
      }
    }
    return count;
  }
}
