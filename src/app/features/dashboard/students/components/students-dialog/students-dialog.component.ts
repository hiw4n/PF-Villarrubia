import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../../../../core/interfaces/student.interface';
import { CoursesService } from '../../../../../core/services/courses.service';
import { Course } from '../../../../../core/interfaces/course.interface';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss',
})
export class StudentsDialogComponent implements OnInit {
  studentForm: FormGroup;
  isLoading: boolean = false;
  dataCourses$: Course[] = [];
  courseSelect: string = '';

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) public editingStudent?: Student
  ) {
    this.studentForm = this.fb.group({
      first_name: [''],
      last_Name: [''],
      courseId: [''],
    });
    if (this.editingStudent) {
      this.studentForm.patchValue(this.editingStudent);
    }
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    this.coursesService.get().subscribe({
      next: (o) => {
        this.dataCourses$ = o;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  onSubmit(): void {
    if (this.studentForm.valid) {
      this.matDialogRef.close(this.studentForm.value);
    } else {
      alert('por favor incluye los valores requeridos');
    }
  }
}
