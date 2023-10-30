import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router)
  if(token==null){
    return true;
  }
  router.navigate(['admin/dashboard'])
  return false;
};
