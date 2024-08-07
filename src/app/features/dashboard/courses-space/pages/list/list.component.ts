import { Component, OnInit } from '@angular/core';
import { CourseSpace } from '../../../../../core/interfaces/course-space.interface';
import { CoursesSpacesService } from '../../../../../core/services/courses-spaces.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  /* styleUrl: './list.component.scss', */
})
export class ListComponent implements OnInit {
  public course: CourseSpace[] = [];

  constructor(private coursesService: CoursesSpacesService) {}

  ngOnInit(): void {
    this.coursesService.get().subscribe((c) => (this.course = c));
  }
}
