export interface Student {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  birthdate?: string;
  photo?: string;
  evaluation?: number;
  address?: string;
  courseId?: string[] | number[];
}
