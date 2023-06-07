import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class HasSessionGuard implements CanActivate{
  constructor(private router: Router){}
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean |UrlTree>|boolean|UrlTree{
      console.log(route);
      console.log(state);
      if(!environment.hasSession){
        this.router.navigate(['/sign-in']);
      }
      return environment.hasSession;
    }

}
