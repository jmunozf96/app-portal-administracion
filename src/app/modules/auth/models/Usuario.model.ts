import {IUser} from "../interfaces/auth.interface";
import {FormBuilder} from "@angular/forms";
import {TipoUsuario} from "../../../core/enums/tipo-usuario.enum";
import {environment} from "../../../../environments/environment";

export class User implements IUser {
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  password: string;
  age: number;
  tipoUsuario: TipoUsuario;

  static instanceNewObject(data: any) {
    const user = new User();
    user.id = data['id'] ?? user.id;
    user.username = data['username'] ?? user.username;
    user.email = data['email'] ?? user.email;
    user.firstName = data['firstName'] ?? user.firstName;
    user.lastName = data['lastName'] ?? user.lastName;
    user.gender = data['gender'] ?? user.gender;
    user.password = data['password'] ?? user.password;
    user.age = data['age'] ?? user.age;
    return user;
  }

  constructor() {
    this.id = null;
    this.username = '';
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
    this.password = '';
    this.age = 0;
    this.tipoUsuario = environment.tipoUsuario;
  }

  get isAdmin() {
    return this.tipoUsuario == TipoUsuario.ADMINISTRADOR;
  }

  formBuilder(fb: FormBuilder) {
    return fb.group({
      id: [this.id],
      username: [this.username],
      email: [this.email],
      firstName: [this.firstName],
      lastName: [this.lastName],
      gender: [this.gender],
      password: [this.password],
      age: [this.age],
    })
  }
}
