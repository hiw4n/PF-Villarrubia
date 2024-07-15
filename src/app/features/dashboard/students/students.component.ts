import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { Students } from './models/students.interface';
import { studentsList } from './models/students.json';
import { courseList } from './models/course.json';
import { Course } from './models/course.interface';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
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
      .open(StudentsDialogComponent)
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
    if (confirm('¿Esta seguro de borrar al alumno?')) {
      this.dataSource = this.dataSource.filter((e) => e.id != id);
    }
  }
  edit(editingStudent: Course) {
    this.matDialog
      .open(StudentsDialogComponent, { data: editingStudent })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.dataSource = this.dataSource.map((e) =>
              e.id === editingStudent.id ? { ...v, id: editingStudent.id } : e
            );
          }
        },
      });
  }
}
