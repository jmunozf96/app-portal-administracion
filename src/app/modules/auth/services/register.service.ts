import {Injectable} from "@angular/core";
import {UsuarioHttpService} from "../../../core/services/usuario-http.service";
import {User} from "../models/Usuario.model";
import {BehaviorSubject, catchError, finalize, of} from "rxjs";

@Injectable()
export class RegisterService {
  isLoading$: BehaviorSubject<boolean>;

  constructor(private usuarioHttpService: UsuarioHttpService) {
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  registrarUsuario(usuario: User) {
    this.isLoading$.next(true);
    return this.usuarioHttpService.guardar(usuario).pipe(
      catchError(() => of(undefined)),
      finalize(() => this.isLoading$.next(false)),
    );
  }
}
