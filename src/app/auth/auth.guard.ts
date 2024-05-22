import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (route.routeConfig?.path == ('login' || 'signup')) {

    if (authService.isAuth.value == true) {
      router.navigate(['/home']);
      return true;
    }else {
      return true;
    }
  }

  if (authService.isAuth.value == false) {
    router.navigate(['/login']);
    return false;
  }
  return authService.isAuth.value;
};
