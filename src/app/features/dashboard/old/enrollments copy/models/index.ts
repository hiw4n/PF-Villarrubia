/* import { Product } from '../../products/models'; */

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
}

export interface Student {
  id: string;
  name: string;
}

export interface LoadStudentsAndCoursesResponse {
  students: Student[];
  /* products: Course[]; */
}

export interface CreateEnrollmentPayload {
  studentId: string;
  /* courseId: string; */
}
