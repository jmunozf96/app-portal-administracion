import {Injectable} from "@angular/core";
import {ApiHttpService} from "./base/api-http.service";
import {IUser} from "../../modules/auth/interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioHttpService extends ApiHttpService {

  guardar(user: IUser) {
    const url = `${this.service}/users/add`;
    return this.http.post(url, user);
  }

}
