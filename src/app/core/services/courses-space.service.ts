import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environments } from '../../../environments/environments';
import { CourseSpace } from '../interfaces/course-space.interface';

@Injectable({ providedIn: 'root' })
export class CoursesServiceSpace {
  private baseUrl = environments.baseUrl + '/courses';

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
}
