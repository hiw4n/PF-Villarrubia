import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrlIni = environments.baseUrl;
  private baseUrl = this.baseUrlIni + '/users';

  constructor(private http: HttpClient) {}

  get(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getByEmail(email: string | null): Observable<User | undefined> {
    return this.http
      .get<User>(`${this.baseUrl}/${email}`)
      .pipe(catchError((e) => of(undefined)));
  }

  // getWithCourse(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}?_embed=courses`);
  // }

  // getById(id: string | number): Observable<User | undefined> {
  //   return this.http
  //     .get<User>(`${this.baseUrl}/${id}`)
  //     .pipe(catchError((e) => of(undefined)));
  // }

  // getSuggestion(query: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}?=${query}&limit=6`);
  // }

  // add(data: User): Observable<User> {
  //   return this.http.post<User>(`${this.baseUrl}`, data);
  // }

  // update(data: User): Observable<User> {
  //   if (!data.id) throw Error('id of element is required');
  //   return this.http.patch<User>(`${this.baseUrl}/${data.id}`, data);
  // }

  // deleted(id: string | number): Observable<boolean> {
  //   return this.http.delete(`${this.baseUrl}/${id}`).pipe(
  //     catchError((e) => of(false)),
  //     map((r) => true)
  //   );
  // }
}
