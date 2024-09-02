import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slider } from '../interfaces/slider.interface';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  private baseUrl = `${environments.baseUrl}/slider`;

  constructor(private http: HttpClient) {}

  get(): Observable<Slider[]> {
    return this.http.get<Slider[]>(`${this.baseUrl}`);
  }
}
