export interface Courses {
  id: string | number;
  name: string;
  start_date?: string;
  end_date?: string;
  students?: string | number | string[] | number[];
  enrollment_date?: string;
  schedule?: string;
  teacher_id?: string | number | string[] | number[];
  teacher_name?: string;
  description?: string;
  image?: string;
  alt_image?: string;

  enrollmentId?: string | number | string[] | number[];
}
