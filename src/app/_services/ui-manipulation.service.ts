import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiManipulationService {

 public isUserLoggedIn: BehaviorSubject<boolean>;
 public userFirstName: BehaviorSubject<string>;
 public userRoleType: BehaviorSubject<string>;
 
  constructor() { 
    if(localStorage.getItem('userGUID')) {
      this.userFirstName  = new BehaviorSubject<string>(localStorage.getItem('firstName') || '')
      this.userRoleType  = new BehaviorSubject<string>(localStorage.getItem('role') || '')
      this.isUserLoggedIn = new BehaviorSubject<boolean>(true);
    } else {
      this.userFirstName  = new BehaviorSubject<string>('');
      this.userRoleType  = new BehaviorSubject<string>('');
      this.isUserLoggedIn = new BehaviorSubject<boolean>(false);
    } 
  }

  setLoginStatus(status: boolean) {
    this.isUserLoggedIn.next(status);
  }
  setUserFirstName(name: string) {
    this.userFirstName.next(name);
  }
  setUserRole(role: any) {
    this.userRoleType.next(role);
  }
}
