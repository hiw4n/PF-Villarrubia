export interface Student {
  id: string | number;
  first_name?: string;
  last_name?: string;
  email?: string;
  birthdate?: string;
  image?: string | undefined;
  evaluation?: number;
  address?: string;
  planet_of_birth?: string;
  courseId?: string[] | number[];

  enrollmentId?: string | number | string[] | number[];
  opinion?: string;
}
