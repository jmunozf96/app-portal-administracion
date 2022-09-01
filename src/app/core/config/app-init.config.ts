import { AuthService } from "../../modules/auth/services/auth.service";
import { APP_INITIALIZER } from "@angular/core";

const appInitializer = (authService: AuthService) => {
  return () => {
    return new Promise(resolve => {
      authService.getUserByToken$.subscribe().add(() => resolve(true))
    });
  };
};

export const APP_INIT = {
  provide: APP_INITIALIZER,
  useFactory: appInitializer,
  multi: true,
  deps: [AuthService],
}

