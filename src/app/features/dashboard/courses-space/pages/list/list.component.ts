import { Component, OnInit } from '@angular/core';
import { CoursesSpaceService } from '../../../../../core/services/courses-space.service';
import { CourseSpace } from '../../../../../core/interfaces/course-space.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  /* styleUrl: './list.component.scss', */
})
export class ListComponent implements OnInit {
  public courses$: CourseSpace[] = [];

  constructor(private coursesService: CoursesSpaceService) {}

  ngOnInit(): void {
    this.coursesService.get().subscribe((c) => (this.courses$ = c));
  }
}
