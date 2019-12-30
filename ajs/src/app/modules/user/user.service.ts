import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUsers() {
    return this.apiService.get('/user');
  }

  addUser(user) {
    return this.apiService.post('/user', user);
  }

  updateUser(user) {
    return this.apiService.put(`/user/${user._id}`, user);
  }

  deleteUser(user) {
    return this.apiService.delete(`/user/${user._id}`);
  }

  getUserById(userId) {
    return this.apiService.get(`/user/${userId}`);
  }
}
