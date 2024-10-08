import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { CourseSpace } from '../../../../../core/interfaces/course-space.interface';
import { CoursesSpaceService } from '../../../../../core/services/courses-space.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  public course?: CourseSpace;
  constructor(
    private courseService: CoursesSpaceService,
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
