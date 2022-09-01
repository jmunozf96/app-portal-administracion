import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {Provider} from "@angular/core";
import {AuthInterceptorInterceptor} from "../interceptors/auth-interceptor.interceptor";

export const INTERCEPTOR_CONFIG: Provider = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true},
  //{provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true},
];
