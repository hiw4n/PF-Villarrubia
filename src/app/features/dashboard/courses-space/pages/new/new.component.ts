import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Teacher } from '../../../../../core/interfaces/teacher.interface';
import { TeachersService } from '../../../../../core/services/teachers.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewComponent implements OnInit {
  public teachers$: Teacher[] = [];

  public formCourse = new FormGroup({
    id: new FormControl<number | string>(''),
    name: new FormControl<string>(''),
    start_date: new FormControl<string | Date>(''),
    end_date: new FormControl<string | Date>(''),
    students: new FormControl<number[]>([]),
    enrollment_date: new FormControl<string>(''),
    schedule: new FormControl<string>(''),
    teachersId: new FormControl<number>(0),
    teacher_name: new FormControl<string>(''),
    short_description: new FormControl<string>(''),
    long_description: new FormControl<string>(''),
    image: new FormControl<string>(''),
    difficulty_level: new FormControl<string>(''),
    duration_hours: new FormControl<number>(0),
    // course_materials: new FormControl<CourseMaterial[]>(),
    // recommended_books: new FormControl<RecommendedBook[]>([]),
    topics_covered: new FormControl<string[]>([]),
    // syllabus: new FormControl<{ [key: string]: WeekContent }>(''),
    prerequisites: new FormControl<string[]>([]),
    assessment_methods: new FormControl<string[]>([]),
    max_students: new FormControl<number>(0),
    available_slots: new FormControl<number>(0),
    language: new FormControl<string>('Estándar Galáctico'),
    credits: new FormControl<number>(5),
    certification: new FormControl<boolean>(true),
    review_score: new FormControl<number>(0),
    // reviews: new FormControl<Review[]>([]),
    related_courses: new FormControl<number[]>([]),
    course_level: new FormControl<string>(''),
    // student_ratings: new FormControl<StudentRating[]>([]),
  });

  constructor(private teacherService: TeachersService) {}

  ngOnInit(): void {
    this.teacherService.get().subscribe((c) => (this.teachers$ = c));
    console.log('this.teachers$', this.teachers$);
  }
  onSubmit(): void {
    console.log(this.formCourse.value);
  }
}
