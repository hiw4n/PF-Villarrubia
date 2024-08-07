export interface CourseSpace {
  id: number;
  name: string;
  start_date: String;
  end_date: String;
  students: number[];
  enrollment_date: string;
  schedule: string;
  teacher_id: number;
  teacher_name: string;
  description: string;
  image: string;
  alt_image?: string;
}
