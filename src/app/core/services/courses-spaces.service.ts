import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { CourseSpace } from '../interfaces/course-space.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class CoursesSpacesService {
  private baseUrl = environments.baseUrl;

  constructor(private http: HttpClient) {}

  get(): Observable<CourseSpace[]> {
    return this.http.get<CourseSpace[]>(`${this.baseUrl}/courses-space`);
  }
  getById(id: String): Observable<CourseSpace | undefined> {
    return this.http
      .get<CourseSpace>(`${this.baseUrl}/courses-space/${id}`)
      .pipe(catchError((e) => of(undefined)));
  }

  getSuggestion(query: string): Observable<CourseSpace[]> {
    return this.http.get<CourseSpace[]>(
      `${this.baseUrl}/courses-space?=${query}&limit=6`
    );
  }
}
