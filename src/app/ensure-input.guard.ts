import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from "./login/login.component";

@Injectable()
export class EnsureInputGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(component.form.dirty);
    if (component.form.dirty) {
      return confirm('您已經輸入部分表單內容，確定要離開嗎？');
    }
    return true;
  }
}
