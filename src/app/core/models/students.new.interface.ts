export interface StudentNew {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  birthdate: Date;
  photo: string;
  evaluation: number;
  address: string;
  course_ids: number[];
}
