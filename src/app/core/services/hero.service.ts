import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private baseUrl = `${environments.baseUrl}/hero`;

  constructor(private http: HttpClient) {}

  get(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}`);
  }
}
