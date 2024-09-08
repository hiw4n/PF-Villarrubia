import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { catchError, map, Observable, of } from 'rxjs';
import { Teacher } from '../interfaces/teacher.interface';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  private baseUrlIni = environments.baseUrl;
  private baseUrl = this.baseUrlIni + '/teachers';
  public data: Teacher[] = [];

  constructor(
    private http: HttpClient,
    private coursesService: CoursesService
  ) {}

  // get(): Observable<Teacher[]> {
  //   return this.http.get<Teacher[]>(`${this.baseUrl}`);
  // }

  get(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}`);
  }
  getWithCourse(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}?_embed=courses`);
  }
  getById(id: string | number): Observable<Teacher | undefined> {
    return this.http
      .get<Teacher>(`${this.baseUrl}/${id}`)
      .pipe(catchError((e) => of(undefined)));
  }

  getSuggestion(query: string): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}?=${query}&limit=6`);
  }

  add(data: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.baseUrl}`, data);
  }

  update(data: Teacher): Observable<Teacher> {
    if (!data.id) throw Error('id of element is required');
    return this.http.patch<Teacher>(`${this.baseUrl}/${data.id}`, data);
  }

  deleted(id: string | number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError((e) => of(false)),
      map((r) => true)
    );
  }
}
