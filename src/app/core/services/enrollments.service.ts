import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enrollment } from '../models/enrollment.interface';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentsService {
  constructor(private http: HttpClient) {}

  get(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(
      environments.apiUrl + '/enrollments?_embed=students&_embed=courses'
    );
  }
  add(): Observable<Enrollment[]> {
    return this.get();
  }
}
