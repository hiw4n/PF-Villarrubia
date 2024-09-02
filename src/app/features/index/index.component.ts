import { Component, OnInit } from '@angular/core';

import { Slider } from '../../core/interfaces/slider.interface';
import { SliderService } from '../../core/services/slider.service';
import { Student } from '../../core/interfaces/student.interface';
import { StudentsService } from '../../core/services/students.service';
import { Teacher } from '../../core/interfaces/teacher.interface';
import { TeachersService } from '../../core/services/teachers.service';
import { CoursesServiceSpace } from '../../core/services/courses-space.service';
import { CourseSpace } from '../../core/interfaces/course-space.interface';

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
    private studentsService: StudentsService,
    private courseService: CoursesServiceSpace,
    private teacherService: TeachersService
  ) {}

  ngOnInit() {
    this.sliderservice.get().subscribe((arg) => (this.slider$ = arg));
    this.studentsService.get().subscribe((arg) => (this.students$ = arg));
    this.courseService.get().subscribe((arg) => (this.courses$ = arg));
    this.teacherService.get().subscribe((arg) => (this.teachers$ = arg));
  }
}
