import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';
@Injectable({
  providedIn:'root'
})
export class HasSessionGuard implements CanActivate{
  constructor(private router: Router, private cookie: CookieService){}
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean |UrlTree>|boolean|UrlTree{
      const session = this.cookie.get('session');
      let dataUser;
      if(!!session){
        dataUser = JSON.parse(atob(session != undefined ? session : ''))
      }
      if(!dataUser?.hasSession){
        this.router.navigate(['/sign-in']);
      }
      return !!dataUser?.hasSession;
    }

}
