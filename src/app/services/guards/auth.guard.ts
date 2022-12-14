import { group } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(public authService: AuthService){
    console.group('Servicio: ', this.authService)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('canActivate: ',this.authService.auth);
      return this.authService.auth;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
    //const ACCESS: boolean = true;
    this.authService.showSession();
      console.log('canload: ',this.authService.auth);
      return this.authService.auth;
  }
}
