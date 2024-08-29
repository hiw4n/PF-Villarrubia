import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EnrollmentsActions } from './store/enrollments.actions';
import {
  selectEnrollments,
  selectEnrollmentsCourses,
  selectEnrollmentsError,
  selectEnrollmentsIsLoading,
  selectEnrollmentsStudents,
} from './store/enrollments.selectors';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { Observable } from 'rxjs';
import { Enrollment } from '../../../core/interfaces/enrollment.interface';
import { Student } from '../../../core/interfaces/student.interface';
import { Course } from '../../../core/interfaces/course.interface';
import { NotifierService } from '../../../core/services/notifier.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent implements OnInit {
  enrollmentForm: FormGroup;
  isLoading$: Observable<boolean>;
  enrollments$: Observable<Enrollment[]>;
  students$: Observable<Student[] | undefined>;
  courses$: Observable<Course[] | undefined>;
  error$: Observable<unknown>;

  constructor(
    private store: Store<RootState>,
    private notifierService: NotifierService,
    private fb: FormBuilder
  ) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading);
    this.error$ = this.store.select(selectEnrollmentsError);
    this.students$ = this.store.select(selectEnrollmentsStudents);
    this.courses$ = this.store.select(selectEnrollmentsCourses);
    this.enrollmentForm = this.fb.group({
      studentId: [null, Validators.required],
      courseId: [null, Validators.required],
    });
  }

  ngOnInit(): void {}
}
