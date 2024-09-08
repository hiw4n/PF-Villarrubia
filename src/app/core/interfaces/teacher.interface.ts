import { Course } from './course.interface';

export interface Teacher {
  id: string | number;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  title: string;
  specialty: string;
  planet_of_origin: string;
  courseId: string | number;
  course?: Course | Course[];
  rating: number;
  missions: Missions;
}

export interface Missions {
  total: number;
  successful: number;
  failed: number;
}
