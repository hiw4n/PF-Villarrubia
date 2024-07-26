import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.interface';
import { courseList } from '../data/course.json';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  /* constructor() {} */

  getCourses(): Observable<Course[]> {
    return new Observable((ob) => {
      setTimeout(() => {
        ob.next(courseList);
        ob.complete();
      }, 1000);
    });
  }
}
