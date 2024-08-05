import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../../../../core/models/course.interface';
import { CoursesService } from '../../../../../core/services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent {
  course$: Observable<Course | undefined>;

  constructor(
    private coursesService: CoursesService,
    private activateRoute: ActivatedRoute
  ) {
    this.course$ = this.coursesService.getById(
      this.activateRoute.snapshot.params['id']
    );
  }
}
