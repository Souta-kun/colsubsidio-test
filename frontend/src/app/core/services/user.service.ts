import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(user: UserModel) {
    return this.http.post<UserModel>(`${environment.API}user/`, user);
  }

  getUsers(name: string, email: string) {
    return this.http.get<UserModel[]>(`${environment.API}user/all`);
  }
}
