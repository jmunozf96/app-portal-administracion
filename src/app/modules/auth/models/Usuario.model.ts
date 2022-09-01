import {IUser} from "../interfaces/auth.interface";

export class Usuario implements IUser {
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;

  static instanceNewObject(data: any) {
    const user = new Usuario();
    user.id = data['id'] ?? user.id;
    user.username = data['username'] ?? user.username;
    user.email = data['email'] ?? user.email;
    user.firstName = data['firstName'] ?? user.firstName;
    user.lastName = data['lastName'] ?? user.lastName;
    user.gender = data['gender'] ?? user.gender;
    return user;
  }

  constructor() {
    this.id = null;
    this.username = '';
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
  }
}
