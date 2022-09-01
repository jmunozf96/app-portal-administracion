import {Injectable} from "@angular/core";
import {BehaviorSubject, catchError, finalize, Observable, of, tap} from "rxjs";
import {UsuarioAuth} from "../models/UsuarioAuth.model";
import {Usuario} from "../models/Usuario.model";
import {AuthHttpService} from "../../../core/services/auth-http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: BehaviorSubject<Usuario | undefined>;
  isLoading$: BehaviorSubject<boolean>;

  constructor(private authHttp: AuthHttpService) {
    this.isLoading$ = new BehaviorSubject<boolean>(false);
    this.currentUser$ = new BehaviorSubject<Usuario | undefined>(undefined);
  }

  login(username: string, password: string): Observable<Usuario | undefined> {
    this.isLoading$.next(true);
    return this.authHttp.login(username, password).pipe(
      tap((user) => this.setSession(Usuario.instanceNewObject(user), UsuarioAuth.instanceNewObject(user))),
      catchError(() => of(undefined)),
      finalize(() => this.isLoading$.next(false)),
    );
  }

  private setSession(user: Usuario, auth: UsuarioAuth) {
    this.currentUser$.next(auth);
    localStorage.setItem('_user', JSON.stringify(user));
    localStorage.setItem('_token', auth.token);
  }
}
