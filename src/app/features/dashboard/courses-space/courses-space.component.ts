import { Component, OnInit } from '@angular/core';
import { CourseSpace } from '../../../core/interfaces/course-space.interface';
import { CoursesSpacesService } from '../../../core/services/courses-spaces.service';

@Component({
  selector: 'app-courses-space',
  templateUrl: './courses-space.component.html',
  styleUrl: './courses-space.component.scss',
})
export class CoursesSpaceComponent implements OnInit {
  public courses: CourseSpace[] = [];

  constructor(private coursesService: CoursesSpacesService) {}

  ngOnInit(): void {
    this.coursesService.get().subscribe((arg) => (this.courses = arg));
  }
}
