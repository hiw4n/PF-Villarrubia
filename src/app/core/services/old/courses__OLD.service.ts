import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';
import { courseList } from '../data/course.json';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interfaces/student.interface';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class__OLD {
  private MY_DB = courseList;
  private timeLoading: number = 1000;
  private baseUrl = `${environments.baseUrl}/courses`;

  //return new Observable((o) => { setTimeout(() => { }, 1000)})
  constructor(private http: HttpClient) {}
  get(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
  /*   get(): Observable<Course[]> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(this.MY_DB);
        o.complete();
      }, this.timeLoading);
    });
  } */
  getById(id: string): Observable<Course | undefined> {
    return this.get().pipe(map((m) => m.find((e) => e.id === id)));
  }
  add(data: Course): Observable<Course[]> {
    this.MY_DB.push(data);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(this.MY_DB);
        o.complete();
      }, this.timeLoading);
    });
  }
  editById(id: string, data: Course) {
    this.MY_DB = this.MY_DB.map((e) => (e.id === id ? { ...data, id } : e));
    return this.get();
  }

  deletedById(id: string): Observable<Course[]> {
    this.MY_DB = this.MY_DB.filter((e) => e.id != id);
    return this.get();
  }
  deletedBAll(id: string): Observable<Course[]> {
    this.MY_DB = [];
    return this.get();
  }
}
