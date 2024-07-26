import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { userData } from '../data/user.json';

/* @Injectable({
  providedIn: 'root',
}) */
export class AuthService {
  users: User[] = userData;

  constructor() {}

  // METODOS
  login(data: any) {
    const { email, password } = data;
    this.users.forEach((e) => {
      if ((e.email = email) && e.password == password) {
        console.log('coincide');
      } else {
        console.log('error de datos');
      }
    });
  }

  verificarToken() {}

  getUserAuthenfication() {}
}
