import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../core/interfaces/teacher.interface';
import { TeachersService } from '../../../core/services/teachers.service';
import { CoursesService } from '../../../core/services/courses.service';
import { CoursesServiceSpace } from '../../../core/services/courses-space.service';
import { CourseSpace } from '../../../core/interfaces/course-space.interface';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
})
export class TeachersComponent implements OnInit {
  public data$: Teacher[] = [];
  public dataCourse$: CourseSpace[] = [];
  public dataAll$: Teacher[] = [];

  constructor(
    private teacherService: TeachersService,
    private courseService: CoursesServiceSpace
  ) {}

  ngOnInit(): void {
    this.teacherService.get().subscribe((d) => (this.data$ = d));
    this.teacherService
      .getWithCourse()
      .subscribe((d) => (this.dataCourse$ = d));
  }
}
