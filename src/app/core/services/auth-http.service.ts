import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UsuarioAuth} from "../../modules/auth/models/UsuarioAuth.model";
import {ApiHttpService} from "./base/api-http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService extends ApiHttpService {

  login(username: string, password: string): Observable<UsuarioAuth> {
    let url = `${this.service}/Auth/Login`;
    const credentials = {username, password};
    return this.http.post<UsuarioAuth>(url, credentials);
  }

}
