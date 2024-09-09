import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Student } from '../../../../../core/interfaces/student.interface';
import { StudentJsService } from '../../../../../core/services/studentsJS.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  public student?: Student;

  constructor(
    private studentsService: StudentJsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.studentsService.getById(id)))
      .subscribe((student) => {
        if (!student) return this.router.navigate(['/list']);

        this.student = student;
        return;
      });
  }
  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
