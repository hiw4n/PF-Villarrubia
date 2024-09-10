export type UserRole = 'ADMIN' | 'EMPLOYEE';

export interface User {
  id?: string | number;

  user: string;
  image?: string;
  email: string | null | undefined;
  first_name?: string;
  last_name?: string;
  password?: string;

  role?: UserRole;

  token?: string;
  enrollements?: string | string[] | number | number[];
  enrollementId?: string | string[] | number | number[];
}
