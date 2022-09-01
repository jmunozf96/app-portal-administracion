import {Injectable} from "@angular/core";
import {BehaviorSubject, catchError, finalize, Observable, of, tap} from "rxjs";
import {UserAuth} from "../models/UsuarioAuth.model";
import {User} from "../models/Usuario.model";
import {AuthHttpService} from "../../../core/services/auth-http.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: BehaviorSubject<User | undefined>;
  isLoading$: BehaviorSubject<boolean>;

  constructor(private authHttp: AuthHttpService,
              private router: Router) {
    this.isLoading$ = new BehaviorSubject<boolean>(false);
    this.currentUser$ = new BehaviorSubject<User | undefined>(undefined);
  }

  get currentUserValue(): User | undefined {
    return this.currentUser$.value;
  }

  login(username: string, password: string): Observable<User | undefined> {
    this.isLoading$.next(true);
    return this.authHttp.login(username, password).pipe(
      tap((user) => user && this.setSession(User.instanceNewObject(user), UserAuth.instanceNewObject(user))),
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

  get getUserByToken$(): Observable<User | undefined> {
    const user = this.getUserFromLocalStorage();
    if (!user) return of(undefined);
    this.currentUser$.next(user);
    return of(user);
  }

  private getUserFromLocalStorage() {
    const user_storage = localStorage.getItem('_user');
    return user_storage ? User.instanceNewObject(JSON.parse(user_storage)) : undefined;
  }

  private setSession(user: User, auth: UserAuth) {
    this.currentUser$.next(auth);
    localStorage.setItem('_user', JSON.stringify(user));
    localStorage.setItem('_token', auth.token);
  }
}
