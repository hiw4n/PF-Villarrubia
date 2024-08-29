import { Course } from '../../../../core/interfaces/course.interface';
import { Student } from '../../../../core/interfaces/student.interface';

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
}

export interface LoadStudentsAndCoursesResponse {
  students?: Student[] | undefined;
  courses?: Course[] | undefined;
}

export interface CreateEnrollmentPayload {
  studentId: string;
  courseId: string;
}
