import { PhoneModel } from './phone.model';

export class UserModel {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public phones: PhoneModel[],
    public token: string
  ) {}
}
