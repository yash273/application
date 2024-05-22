import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }

  isSignedIn(): boolean {
    const data = localStorage.getItem('data');
    if (data == 'user') {
      this.isAuth.next(true);
      return true;
    } else {
      this.isAuth.next(false);
      return false;
    }
  }

  login(data: string) {
    this.isAuth.next(true);
    localStorage.setItem('data', data);
    this.router.navigate(['/home'])
  }

  logOut(data: string) {
    localStorage.removeItem('data');
    this.isAuth.next(false);
    this.router.navigate(['/login']);
  }
}
