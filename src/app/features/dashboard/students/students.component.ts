import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { Student } from '../../../core/models/students.interface';
import { studentsList } from '../../../core/data/student.json';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  nombreStudent: string = '';
  apellidoStudent: string = '';
  displayedColumns: string[] = ['id', 'nameLastname', 'courses', 'actions'];
  dataSource: Student[] = studentsList;

  constructor(private matDialog: MatDialog) {}
  openDialog(): void {
    // Dialog form student
    this.matDialog
      .open(StudentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          console.log('recibimos este valor: ', value);
          value.id = this.dataSource.length + 1;
          this.nombreStudent = value.name;
          this.apellidoStudent = value.lastName;
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
  edit(editingStudent: Student) {
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
