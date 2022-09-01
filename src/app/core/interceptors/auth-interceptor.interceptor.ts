import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from "../../modules/auth/services/auth.service";

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('_token');
    if (!idToken) return next.handle(req);
    else {
      const cloned = this.addTokenHeader(req, idToken);
      return next.handle(cloned).pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            this.authService.logout();
          }
          return throwError(error);
        }),
      );
    }
  }

  addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
  }
}

