import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: UserModel[];

  constructor() {
    this.users = [];

    let user = new UserModel(
      'Carlos',
      'carls.barrios@gmail.com',
      'abc1234567',
      []
    );

    this.users.push(user);
  }

  addUser(user: UserModel) {
    this.users.push(user);

    return of('Ok');
  }

  getUsers(name: string, email: string) {
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);

    return of(this.users);
  }
}
