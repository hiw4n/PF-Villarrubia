import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environments } from '../../../environments/environments';
import { CourseSpace } from '../interfaces/course-space.interface';

@Injectable({ providedIn: 'root' })
export class CoursesServiceSpace {
  private baseUrl = environments.baseUrl + '/courses-space';

  constructor(private http: HttpClient) {}

  get(): Observable<CourseSpace[]> {
    return this.http.get<CourseSpace[]>(`${this.baseUrl}`);
  }

  getById(id: String): Observable<CourseSpace | undefined> {
    return this.http
      .get<CourseSpace>(`${this.baseUrl}/${id}`)
      .pipe(catchError((e) => of(undefined)));
  }

  getSuggestion(query: string): Observable<CourseSpace[]> {
    return this.http.get<CourseSpace[]>(`${this.baseUrl}?=${query}&limit=6`);
  }

  add(data: CourseSpace): Observable<CourseSpace> {
    return this.http.post<CourseSpace>(`${this.baseUrl}`, data);
  }

  update(data: CourseSpace): Observable<CourseSpace> {
    if (!data.id) throw Error('id of element is required');
    return this.http.patch<CourseSpace>(`${this.baseUrl}/${data.id}`, data);
  }

  deleted(id: CourseSpace): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError((e) => of(false)),
      map((r) => true)
    );
  }
}
