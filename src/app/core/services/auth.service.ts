import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { User } from '../models/user.interface';
import { map, Observable, of, tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /* users: User[] = userData; */
  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) {}
  get currentUser(): User | undefined {
    if (this.user) return undefined;
    return structuredClone(this.user);
  }
  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', '1234token'))
    );
  }
  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);
    const token = localStorage.getItem('token');
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError((err) => of(false))
    );
  }
  logOut() {
    this.user = undefined;
    localStorage.clear();
  }
}
