import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _jwtHelperService: JwtHelperService
  ) { }

  loggedIn() {
    const token = this._jwtHelperService.tokenGetter();
    if (!token) {
      return false;
    }
    return !this._jwtHelperService.isTokenExpired(token);
  }
  
  isUserIdExists() {
    if (localStorage.getItem('userID')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    
  }

}
