import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private username: string | null = null;

  logIn(username: string, password: string): Observable<boolean> {
    if(username === 'user' && password === 'password') {
      this.isAuthenticated.next(true);
      this.username = username;
      return this.isAuthenticated.asObservable();
    }
    this.isAuthenticated.next(false)
    return this.isAuthenticated.asObservable();
  }

  logOut(){
    this.isAuthenticated.next(false);
    this.username = null;
  }

  getAuthStatus(): Observable<boolean>{
    return this.isAuthenticated.asObservable();
  }

  getUserName(): string | null{
    return this.username;
  }
}
