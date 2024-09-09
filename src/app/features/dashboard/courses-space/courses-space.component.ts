import { Component, OnInit } from '@angular/core';
import { CoursesSpaceService } from '../../../core/services/courses-space.service';
import { CourseSpace } from '../../../core/interfaces/course-space.interface';

@Component({
  selector: 'app-courses-space',
  templateUrl: './courses-space.component.html',
  styleUrl: './courses-space.component.scss',
})
export class CoursesSpaceComponent implements OnInit {
  public courses: CourseSpace[] = [];

  constructor(private coursesService: CoursesSpaceService) {}

  ngOnInit(): void {
    this.coursesService.get().subscribe((arg) => (this.courses = arg));
  }
}
