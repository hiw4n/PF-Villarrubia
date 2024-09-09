import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { CoursesSpaceService } from './courses-space.service';
import { StudentJS } from '../interfaces/studentJS.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentJsService {
  // private timeLoading: number = 1000;

  private baseUrlIni = environments.baseUrl;
  private baseUrl = this.baseUrlIni + '/students';
  public data$: StudentJS[] = [];

  //return new Observable((o) => { setTimeout(() => { }, 1000)})
  constructor(
    private http: HttpClient,
    private coursesService: CoursesSpaceService
  ) {}
  get(): Observable<StudentJS[]> {
    return this.http.get<StudentJS[]>(`${this.baseUrl}`);
  }
  // Falla el embebed if is id array
  getWithCourse(): Observable<StudentJS[]> {
    return this.http.get<StudentJS[]>(`${this.baseUrl}?_embed=courses`);
  }
  getById(id: string | number): Observable<StudentJS | undefined> {
    return this.http
      .get<StudentJS>(`${this.baseUrl}/${id}`)
      .pipe(catchError((e) => of(undefined)));
  }

  getSuggestion(query: string): Observable<StudentJS[]> {
    return this.http.get<StudentJS[]>(`${this.baseUrl}?=${query}&limit=6`);
  }

  add(data: StudentJS): Observable<StudentJS> {
    return this.http.post<StudentJS>(`${this.baseUrl}`, data);
  }

  update(data: StudentJS): Observable<StudentJS> {
    if (!data.id) throw Error('id of element is required');
    return this.http.patch<StudentJS>(`${this.baseUrl}/${data.id}`, data);
  }
  updateAll(data: StudentJS[]): Observable<StudentJS[]> {
    if (!data) throw Error('element is required');
    return this.http.patch<StudentJS[]>(`${this.baseUrl}`, data);
  }

  deletedById(id: string | number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError((e) => of(false)),
      map((r) => true)
    );
  }
}
