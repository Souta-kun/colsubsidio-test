import { PhoneModel } from './phone.model';

export class UserModel {
  constructor(
    // public id: string,
    public name: string,
    public email: string,
    public password: string,
    public phones: PhoneModel[]
  ) // public isActive: boolean,
  // public lastLogin: Date,
  // public created: Date,
  // public modified: Date,
  // public token: string
  {}
}
