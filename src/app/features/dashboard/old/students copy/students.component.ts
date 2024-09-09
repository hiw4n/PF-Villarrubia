import { Component, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { StudentsService } from '../../../core/services/students.service';
import { Student } from '../../../core/interfaces/student.interface';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
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
  public data$: Student[] = [];
  public dataWithCourse$: Student[] = [];

  constructor(
    private matDialog: MatDialog,
    private studentService: StudentsService
  ) {}
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

  openDialog(): void {
    // Dialog form student
    this.matDialog
      .open(StudentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          //console.log('recibimos este valor: ', value);
          this.nombreStudent = value.first_name;
          (this.apellidoStudent = value.last_name),
            (this.data$ = [...this.data$, value]);
        },
      });
  }
  deleteById(id: string) {
    if (confirm('Esta seguro?')) {
      this.isLoading = true;

      this.studentService.deletedById(id).subscribe({
        // next: (c) => {
        //   this.data$ = [...c];
        // },
        // complete: () => {
        //   this.isLoading = false;
        // },
      });
    }
  }
  deleteById_OLD(id: string | number) {
    // if (confirm('¿Esta seguro de borrar al alumno?')) {
    //   this.studentService.deletedById(id).subscribe();
    // }
  }
  //table form
  // deleteById(id: string | number) {
  //   if (confirm('¿Esta seguro de borrar al alumno?')) {
  //     //   // this.studentService.deletedById(id).subscribe((r) => console.log('r', r));
  //     this.dataWithCourse$ = this.dataWithCourse$.filter((e) => e.id != id);
  //     this.data$ = this.data$.filter((e) => e.id != id);
  //     this.studentService.updateAll(this.data$);
  //   }
  //   if (confirm('¿Esta seguro de borrar al alumno?')) {
  //     this.isLoading = true;
  //     this.studentService.deletedById(id).subscribe({
  //       next: (o) => {
  //         console.log('o', 2);
  //         this.data$ = [...o];
  //       },
  //       complete: () => {
  //         this.isLoading = false;
  //       },
  //     });
  //     /* this.dataSource = this.dataSource.filter((e) => e.id != id); */
  //   }
  // }
  edit(editingStudent: Student) {
    this.matDialog
      .open(StudentsDialogComponent, { data: editingStudent })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.data$ = this.data$.map((e) =>
              e.id === editingStudent.id ? { ...v, id: editingStudent.id } : e
            );
          }
        },
      });
  }
}
