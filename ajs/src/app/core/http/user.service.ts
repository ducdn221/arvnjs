import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiService: ApiService,
    private db: AngularFireDatabase
  ) { }

  getUsers() {
    return this.apiService.get('/users');
  }

  addUser(user) {
    return this.apiService.post('/users', user);
  }

  updateUser(user) {
    return this.apiService.put(`/users/${user._id}`, user);
  }

  deleteUser(user) {
    return this.apiService.delete(`/users/${user._id}`);
  }

  getUserById(userId) {
    return this.apiService.get(`/users/${userId}`);
  }

  addFirebaseUser(user: firebase.User) {
    this.db.object('/agushop-62027/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
}
