export type UserRole = 'ADMIN' | 'EMPLOYEE';

export interface UserNew {
  id: string;

  user: string;
  email: string;
  password: string;

  role: UserRole;
  firstName: string;
  lastName: string;

  token: string;
}
