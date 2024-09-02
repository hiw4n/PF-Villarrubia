import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../../core/interfaces/course.interface';
import { CoursesService } from '../../../../../core/services/courses.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  /* styleUrl: './list.component.scss', */
})
export class ListComponent implements OnInit {
  public course: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.get().subscribe((c) => (this.course = c));
  }
}
