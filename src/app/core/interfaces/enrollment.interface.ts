export interface Enrollment {
  id: string | number;
  name?: string;
  date?: string;
  studentId?: string | number | string[] | number[];
  teacherId?: string | number | string[] | number[];
  courseId?: string | number | string[] | number[];
}
