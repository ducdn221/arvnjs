import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    this.db.list('/products').push(product);
  }

  getAll() {
    return combineLatest(
      this.db.list('/products').valueChanges(),
      this.db.list('/products').snapshotChanges()
    ).pipe(
      map(data => data[0].map((item, i) => Object.assign({} as Product, item, data[1][i])))
    );
  }

  getById(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
