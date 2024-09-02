import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Course } from '../../../../../core/interfaces/course.interface';
import { CoursesService } from '../../../../../core/services/courses.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  public course?: Course;
  constructor(
    private courseService: CoursesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.courseService.getById(id))
      )
      .subscribe((c) => {
        if (!c) return this.router.navigate(['/list']);
        this.course = c;
        console.log(c);
        return;
      });
  }
  goBack(): void {
    this.router.navigateByUrl('dashboard/courses');
  }
}
