import {
  selectEnrollments,
  selectEnrollmentsError,
  selectEnrollmentsIsLoading,
} from './store/enrollments.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { Enrollment } from './models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent implements OnInit {
  /* enrollmentForm: FormGroup; */
  isLoading$: Observable<boolean>;
  enrollments$: Observable<Enrollment[]>;
  /* students$: Observable<Student[]>; */
  /* products$: Observable<Product[]>; */
  error$: Observable<unknown>;

  constructor(private store: Store<RootState>) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading);
    this.error$ = this.store.select(selectEnrollmentsError);
    /* this.students$ = this.store.select(selectEnrollmentsStudents); */
    /* this.products$ = this.store.select(selectEnrollmentsProducts); */
    /* this.enrollmentForm = this.fb.group({
      studentId: [null, Validators.required],
      productId: [null, Validators.required],
    }); */
  }

  ngOnInit(): void {}
}
