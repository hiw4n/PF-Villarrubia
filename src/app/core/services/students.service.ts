import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { studentsList } from '../data/student.json';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private MY_DB = studentsList;
  private timeLoading: number = 1000;

  get(): Observable<Student[]> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(this.MY_DB);
        o.complete();
      }, this.timeLoading);
    });
  }

  getById(id: string): Observable<Student | undefined> {
    return this.get().pipe(map((m) => m.find((e) => e.id === id)));
  }

  add(data: Student): Observable<Student[]> {
    this.MY_DB.push(data);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(this.MY_DB);
        o.complete();
      }, this.timeLoading);
    });
  }

  editById(id: string, data: Student) {
    this.MY_DB = this.MY_DB.map((e) => (e.id === id ? { ...data, id } : e));
    return this.get();
  }

  deletedById(id: string): Observable<Student[]> {
    this.MY_DB = this.MY_DB.filter((e) => e.id != id);
    return this.get();
  }

  deletedBAll(id: string): Observable<Student[]> {
    this.MY_DB = [];
    return this.get();
  }
}
