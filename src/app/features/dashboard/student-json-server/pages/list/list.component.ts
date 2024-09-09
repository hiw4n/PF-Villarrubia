import { Component, OnInit } from '@angular/core';
import { StudentJS } from '../../../../../core/interfaces/studentJS.interface';
import { StudentJsService } from '../../../../../core/services/studentsJS.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  nombreStudent: string = '';
  apellidoStudent: string = '';
  displayedColumns: string[] = [
    'id',
    'image',
    'first_name',
    // 'last_name',
    //'email',
    'birthdate',
    // 'evaluation',
    // 'address',
    // 'planet_of_birth',
    // 'courseId',
    'course',
    // 'enrollmentId',
    // 'opinion',
    'actions',
  ];
  isLoading = false;
  public data$: StudentJS[] = [];
  public dataWithCourse$: StudentJS[] = [];

  constructor(private studentService: StudentJsService) {}
  ngOnInit(): void {
    this.loadData();
    this.studentService.get().subscribe((a) => (this.data$ = a));
    this.studentService
      .getWithCourse()
      .subscribe((a) => (this.dataWithCourse$ = a));
  }
  loadData() {
    this.isLoading = true;
    this.studentService.get().subscribe({
      next: (s) => {
        this.data$ = s;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
