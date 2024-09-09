import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CoursesService } from '../../../core/services/courses.service';
import { Course } from '../../../core/interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  nombreCurso: string = '';
  displayedColumns: string[] = [
    'id',
    'name',
    'startDate',
    'endDate',
    'actions',
  ];
  dataSource: Course[] = [];
  isLoading: boolean = false;

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    this.coursesService.get().subscribe({
      next: (o) => {
        this.dataSource = o;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  openDialog(): void {
    // Dialog form course
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          v.id = this.dataSource.length + 1;
          this.nombreCurso = v.name;
          v.startDate = new Date();
          v.endDate = new Date();
          this.isLoading = true;
          this.coursesService.add(v).subscribe({
            next: (o) => {
              this.dataSource = [...o];
            },
            complete: () => {
              this.isLoading = false;
            },
          });
        },
      });
  }
  //table form
  deleteById(id: string) {
    if (confirm('Esta seguro?')) {
      this.isLoading = true;
      this.coursesService.deletedById(id).subscribe({
        next: (o) => {
          this.dataSource = [...o];
        },
        complete: () => {
          this.isLoading = false;
        },
      });
      /* this.dataSource = this.dataSource.filter((e) => e.id != id); */
    }
  }
  editById(data: Course) {
    this.matDialog
      .open(CoursesDialogComponent, { data: data })
      .afterClosed()
      .subscribe({
        next: (e) => {
          if (!!e) {
            this.coursesService.editById(data.id, e).subscribe({
              next: (o) => (this.dataSource = [...o]),
            });
          }
        },
      });
  }
}
