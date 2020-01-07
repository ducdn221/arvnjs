import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async addToCart(product: Product) {
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, product.key);
    item$.valueChanges().pipe(take(1)).subscribe(item => {
      item$.update({
        product: {
          title: product.title,
          price: product.price,
          category: product.category,
          imageUrl: product.imageUrl
        },
        quantity: ((item as any).quantity || 0) + change
      });
    });
  }

  private getItem(cartId, productId) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> {
    const cardId = localStorage.getItem('cartId');
    if (cardId) {
      return cardId;
    }
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }
}
