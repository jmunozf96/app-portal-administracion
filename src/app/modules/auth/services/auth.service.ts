import {Injectable} from "@angular/core";
import {BehaviorSubject, catchError, finalize, Observable, of, tap} from "rxjs";
import {UsuarioAuth} from "../models/UsuarioAuth.model";
import {Usuario} from "../models/Usuario.model";
import {AuthHttpService} from "../../../core/services/auth-http.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: BehaviorSubject<Usuario | undefined>;
  isLoading$: BehaviorSubject<boolean>;

  constructor(private authHttp: AuthHttpService,
              private router: Router) {
    this.isLoading$ = new BehaviorSubject<boolean>(false);
    this.currentUser$ = new BehaviorSubject<Usuario | undefined>(undefined);
  }

  get currentUserValue(): Usuario | undefined {
    return this.currentUser$.value;
  }

  login(username: string, password: string): Observable<Usuario | undefined> {
    this.isLoading$.next(true);
    return this.authHttp.login(username, password).pipe(
      tap((user) => user && this.setSession(Usuario.instanceNewObject(user), UsuarioAuth.instanceNewObject(user))),
      catchError(() => of(undefined)),
      finalize(() => this.isLoading$.next(false)),
    );
  }

  logout() {
    this.currentUser$.next(undefined);
    this.router.navigate(['/auth']).then(() => {
      localStorage.clear();
    });
  }

  get getUserByToken$(): Observable<Usuario | undefined> {
    const user = this.getUserFromLocalStorage();
    if (!user) return of(undefined);
    this.currentUser$.next(user);
    return of(user);
  }

  private getUserFromLocalStorage() {
    const user_storage = localStorage.getItem('_user');
    return user_storage ? JSON.parse(user_storage) : undefined;
  }

  private setSession(user: Usuario, auth: UsuarioAuth) {
    this.currentUser$.next(auth);
    localStorage.setItem('_user', JSON.stringify(user));
    localStorage.setItem('_token', auth.token);
  }
}
