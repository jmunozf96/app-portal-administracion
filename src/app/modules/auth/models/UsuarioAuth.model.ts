import {Usuario} from "./Usuario.model";
import {IAuth} from "../interfaces/auth.interface";

export class UsuarioAuth extends Usuario implements IAuth {
  token: string;

  static override instanceNewObject(data: any) {
    let auth = new UsuarioAuth();
    auth = Object.assign(auth, super.instanceNewObject(data));
    auth.token = data['token'] ?? auth.token;
    return auth;
  }

  constructor() {
    super();
    this.token = '';
  }


}
