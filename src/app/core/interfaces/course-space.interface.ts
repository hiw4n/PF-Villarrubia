export interface CourseSpace {
  id: string | number;
  name?: string;
  start_date?: string | Date;
  end_date?: string | Date;
  students?: number[];
  enrollment_date?: string;
  schedule?: string;
  teachersId?: number;
  teacher_name?: string;
  short_description?: string;
  long_description?: string;
  image?: string;
  difficulty_level?: string;
  duration_hours?: number;
  course_materials?: CourseMaterial[];
  recommended_books?: RecommendedBook[];
  topics_covered?: string[];
  syllabus?: { [key: string]: WeekContent };
  prerequisites?: string[];
  assessment_methods?: string[];
  max_students?: number;
  available_slots?: number;
  language?: string;
  credits?: number;
  certification?: boolean;
  review_score?: number;
  reviews?: Review[];
  related_courses?: number[];
  course_level?: string;
  student_ratings?: StudentRating[];
}

interface CourseMaterial {
  type?: string;
  title?: string;
  author?: string;
  url?: string;
}

interface RecommendedBook {
  title?: string;
  author?: string;
  isbn?: string;
}

interface WeekContent {
  title?: string;
  content?: string[];
}

interface Review {
  studentsId?: number;
  rating?: number;
  comment?: string;
}

interface StudentRating {
  studentsId?: number;
  rating?: number;
  comment?: string;
}
