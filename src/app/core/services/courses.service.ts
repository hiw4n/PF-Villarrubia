import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';
import { courseList } from '../data/course.json';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private MY_DB = courseList;
  private timeLoading: number = 1000;

  get(): Observable<Course[]> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(this.MY_DB);
        o.complete();
      }, this.timeLoading);
    });
  }
  getById(id: string | number): Observable<Course | undefined> {
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
  editById(id: string | number, data: Course) {
    this.MY_DB = this.MY_DB.map((e) => (e.id === id ? { ...data, id } : e));
    return this.get();
  }

  deletedById(id: string | number): Observable<Course[]> {
    this.MY_DB = this.MY_DB.filter((e) => e.id != id);
    return this.get();
  }
  deletedBAll(id: string | number): Observable<Course[]> {
    this.MY_DB = [];
    return this.get();
  }
}
