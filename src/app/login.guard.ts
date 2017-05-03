import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {

  }

  //回傳型別是Observable<boolean> 或 Promise<boolean> 或 boolean
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (next.queryParams['apiKey'] == '123') {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
