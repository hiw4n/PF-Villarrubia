import { User } from '../models/user.interface';

export let userData: User[] = [
  /*   {
    user: 'test@test.com',
    email: 'test@test.com',
    password: '12345',
  },
  {
    user: 'admin@admin.com',
    email: 'admin@admin.com',
    password: 'admin',
  }, */
  {
    id: '1',
    user: 'test@test.com',
    email: 'test@test.com',
    password: '12345',
    role: 'ADMIN',
    firstName: 'Nombre1',
    lastName: 'Apellido1',
    token: '1',
  },
  {
    id: '2',
    user: 'admin@admin.com',
    email: 'admin@admin.com',
    password: 'admin',
    role: 'ADMIN',
    firstName: 'Nombre1',
    lastName: 'Apellido1',
    token: '2',
  },
];
