import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /* users: User[] = userData; */
  private apiUrl = environments.apiUrl;
  private user?: User;

  constructor(private http: HttpClient) {}
  get currentUser(): User | undefined {
    if (this.user) return undefined;
    return structuredClone(this.user);
  }
  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl})/user/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', user.id.toString()))
    );
  }
  // METODOS
  /*  login(data: any) {
    const { email, password } = data;
    this.users.forEach((e) => {
      if ((e.email = email) && e.password == password) {
        console.log('coincide');
      } else {
        console.log('error de datos');
      }
    });
  }

  verificarToken() {}

  getUserAuthenfication() {} */
}
