import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { Course } from './models/course.interface';
import { courseList } from './models/course.json';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  nombreCurso: string = '';
  displayedColumns: string[] = [
    'id',
    'name',
    'startDate',
    'endDate',
    'actions',
  ];
  /* dataSource = ELEMENT_DATA;*/
  dataSource: Course[] = courseList;

  constructor(private matDialog: MatDialog) {}
  openDialog(): void {
    // Dialog form course
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          console.log('recibimos este valor: ', value);
          value.id = this.dataSource.length + 1;
          this.nombreCurso = value.name;
          value.startDate = new Date();
          value.endDate = new Date();

          this.dataSource = [...this.dataSource, value];
        },
      });
  }
  //table form
  deleteById(id: string) {
    if (confirm('Esta seguro?')) {
      this.dataSource = this.dataSource.filter((e) => e.id != id);
    }
  }
  edit(editingCourse: Course) {
    this.matDialog
      .open(CoursesDialogComponent, { data: editingCourse })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.dataSource = this.dataSource.map((e) =>
              e.id === editingCourse.id ? { ...v, id: editingCourse.id } : e
            );
          }
        },
      });
  }
}
