import {User} from "./Usuario.model";
import {IAuth} from "../interfaces/auth.interface";

export class UserAuth extends User implements IAuth {
  token: string;

  static override instanceNewObject(data: any) {
    let auth = new UserAuth();
    auth = Object.assign(auth, super.instanceNewObject(data));
    auth.token = data['token'] ?? auth.token;
    return auth;
  }

  constructor() {
    super();
    this.token = '';
  }


}
