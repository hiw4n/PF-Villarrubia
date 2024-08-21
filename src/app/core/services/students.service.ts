import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { studentsList } from '../data/student.json';
import { Student } from '../models/students.interface';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private MY_DB = studentsList;
  private timeLoading: number = 1000;
  private apiUrl = environments.apiUrl + '/students';
  //return new Observable((o) => { setTimeout(() => { }, 1000)})
  constructor(private http: HttpClient) {}
  get(): Observable<Student[]> {
    /* return new Observable((o) => {
      setTimeout(() => {
        o.next(this.MY_DB);
        o.complete();
      }, this.timeLoading);
    }); */
    return this.http.get<Student[]>(this.apiUrl);
  }
  getById(id: string): Observable<Student | undefined> {
    /* return this.get().pipe(map((m) => m.find((e) => e.id === id))); */
    return this.http
      .get<Student[]>(this.apiUrl)
      .pipe(map((m) => m.find((e) => e.id === id)));
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
