import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentsActions } from './enrollments.actions';
import { Enrollment } from '../../../../core/interfaces/enrollment.interface';
import { Student } from '../../../../core/interfaces/student.interface';
import { Course } from '../../../../core/interfaces/course.interface';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {
  isLoading: boolean;
  isLoadingStudentsAndProducts: boolean;
  enrollments: Enrollment[];
  students: Student[] | undefined;
  courses: Course[] | undefined;
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingStudentsAndProducts: false,
  enrollments: [],
  students: [],
  courses: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  //disparador de una secuencia de acciones
  on(EnrollmentsActions.loadEnrollments, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  //cuando se cargan correctamente qye es que hacen
  on(EnrollmentsActions.loadEnrollmentsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      enrollments: action.data,
      error: null,
    };
  }),

  on(EnrollmentsActions.loadEnrollmentsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),

  on(EnrollmentsActions.loadStudentsAndCourses, (state) => ({
    ...state,
    isLoadingStudentsAndProducts: true,
  })),

  on(EnrollmentsActions.loadStudentsAndCoursesSuccess, (state, action) => ({
    ...state,
    isLoadingStudentsAndProducts: false,
    courses: action.data.courses,
    students: action.data.students,
    error: null,
  })),

  // Create Enrollment
  on(EnrollmentsActions.createEnrollmentSuccess, (state, action) => {
    return {
      ...state,
      enrollments: [...state.enrollments, action.data],
      error: null,
    };
  })
);

export const enrollmentsFeature = createFeature({
  name: enrollmentsFeatureKey,
  reducer,
});
