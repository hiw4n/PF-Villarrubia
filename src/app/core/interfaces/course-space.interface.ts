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
/*
export interface CourseSpace {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  students: number[];
  enrollment_date: string;
  schedule: string;
  teacher_id: number;
  teacher_name: string;
  short_description: string;
  long_description: string;
  image: string;
  difficulty_level: string;
  duration_hours: number;
  course_materials: CourseMaterial[];
  recommended_books: RecommendedBook[];
  topics_covered: string[];
  syllabus: {[key: string]: WeekContent};
  prerequisites: string[];
  assessment_methods: string[];
  max_students: number;
  available_slots: number;
  language: string;
  credits: number;
  certification: boolean;
  review_score: number;
  reviews: Review[];
  related_courses: number[];
  course_level: string;
  student_ratings: StudentRating[];
}

interface CourseMaterial {
  type: string;
  title: string;
  author?: string;
  url: string;
}

interface RecommendedBook {
  title: string;
  author: string;
  isbn: string;
}

interface WeekContent {
  title: string;
  content: string[];
}

interface Review {
  student_id: number;
  rating: number;
  comment: string;
}

interface StudentRating {
  student_id: number;
  rating: number;
  comment: string;
} */
