export interface User {
  empId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {
    this.users = [
      {
        empId: 1007,
        email: 'agrant@yahoo.com',
        password: 'D0theyherds?'
      },
      {
        empId: 1008,
        email: 'john.hammond@ingen.com',
        password: 'Noexpense82'
      },
      {
        empId: 1009,
        email: 'chaostheory@utexas.edu',
        password: 'V9r!qT4#xL8@pW2m'
      },
      {
        empId: 1010,
        email: 'mrmuldoon@gmail.com',
        password: 'Clevergirl0213'
      },
      {
        empId: 1011,
        email: 'e.sattler@hotmail.com',
        password: 'LuvMeDinos526'
      },
      {
        empId: 1012,
        email: 'dennis.nedry@ingen.com',
        password: 'Themagicword69'
      }
    ];
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find(
      user => user.email === email && user.password === password
    );

    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout(): void {
    this.cookieService.deleteAll();
    this.authState.next(false);

    this.router.navigate(['/signin']).then(() => {});
  }
}
