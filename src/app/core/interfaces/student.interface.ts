export interface Student {
  id: string | number;
  first_name?: string;
  last_name?: string;
  email?: string;
  birthdate?: string;
  photo?: string;
  evaluation?: number;
  address?: string;
  planet_of_birth?: string;
  course_ids?: string[] | number[];

  enrollmentId?: string | number | string[] | number[];
}
