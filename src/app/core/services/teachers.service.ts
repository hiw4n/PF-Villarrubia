import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Teacher } from '../interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  private baseUrl = environments.baseUrl + '/teachers';

  constructor(private http: HttpClient) {}

  get(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl);
  }
}
