import {Injectable} from "@angular/core";
import {IUser} from "../../modules/auth/interfaces/auth.interface";
import {IUsuarioPaginate} from "../../modules/usuarios/interfaces/usuarios.interface";
import {ApiCrudHttpService} from "./base/api-crud-http.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioHttpService extends ApiCrudHttpService<IUser, IUsuarioPaginate> {

  override get serviceName(): string {
    return "users";
  }

}
