import {Injectable} from "@angular/core";
import {ApiHttpService} from "./base/api-http.service";
import {IUser} from "../../modules/auth/interfaces/auth.interface";
import {IUsuarioPaginate} from "../../modules/usuarios/interfaces/usuarios.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioHttpService extends ApiHttpService {

  getAll() {
    const url = `${this.service}/users`;
    return this.http.get<IUsuarioPaginate>(url);
  }

  guardar(user: IUser) {
    const url = `${this.service}/users/add`;
    return this.http.post(url, user);
  }

}
