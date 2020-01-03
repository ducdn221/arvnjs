import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return combineLatest(
      this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges(),
      this.db.list('/categories').snapshotChanges()
    ).pipe(
      map(data => data[0].map((item, i) => Object.assign({}, item, data[1][i])))
    );
  }
}
