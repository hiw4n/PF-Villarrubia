export interface Teacher {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  title: string;
  specialty: string;
  planet_of_origin: string;
  courseId: number;
  rating: number;
  missions: Missions;
}

export interface Missions {
  total: number;
  successful: number;
  failed: number;
}
