import { Component, OnInit } from '@angular/core';

import { Slider } from '../../core/interfaces/slider.interface';
import { SliderService } from '../../core/services/slider.service';
import { Student } from '../../core/interfaces/student.interface';
import { StudentsService } from '../../core/services/students.service';
import { Teacher } from '../../core/interfaces/teacher.interface';
import { TeachersService } from '../../core/services/teachers.service';
import { CoursesSpaceService } from '../../core/services/courses-space.service';
import { CourseSpace } from '../../core/interfaces/course-space.interface';
import { StudentJsService } from '../../core/services/studentsJS.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  public slider$: Slider[] = [];
  public students$: Student[] = [];
  public courses$: CourseSpace[] = [];
  public teachers$: Teacher[] = [];

  constructor(
    private sliderservice: SliderService,
    private studentsService: StudentJsService,
    private courseService: CoursesSpaceService,
    private teacherService: TeachersService
  ) {}

  ngOnInit() {
    this.sliderservice.get().subscribe((arg) => (this.slider$ = arg));
    this.studentsService.get().subscribe((arg) => (this.students$ = arg));
    this.courseService.get().subscribe((arg) => (this.courses$ = arg));
    this.teacherService.get().subscribe((arg) => (this.teachers$ = arg));
  }
}
