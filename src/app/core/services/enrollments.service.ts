import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { concatMap, forkJoin, Observable } from 'rxjs';
import {
  CreateEnrollmentPayload,
  LoadStudentsAndCoursesResponse,
} from '../../features/dashboard/enrollments/models';
import { Enrollment } from '../interfaces/enrollment.interface';
import { Student } from '../interfaces/student.interface';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentsService {
  /* private MY_DB: Enrollment[] = []; */

  constructor(private http: HttpClient) {}

  get(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(environments.apiUrl + '/enrollments');
  }
  getAll(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(
      environments.apiUrl + '/enrollments/?_embed=students&_embed=courses'
    );
  }
  getStudentsAndCourses(): Observable<LoadStudentsAndCoursesResponse> {
    return forkJoin({
      students: this.http.get<Student[]>(environments.apiUrl + '/students'),
      courses: this.http.get<Course[]>(environments.apiUrl + '/courses'),
    });
  }

  add(payload: CreateEnrollmentPayload): Observable<Enrollment> {
    return this.http
      .post<Enrollment>(environments.apiUrl + '/sales', payload)
      .pipe(
        concatMap((enrollmentCreated) =>
          this.http.get<Enrollment>(
            environments.apiUrl +
              '/sales/' +
              enrollmentCreated.id +
              '?_embed=course&_embed=student'
          )
        )
      );
  }
}
