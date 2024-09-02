import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../../../../core/models/students.interface';
import { courseList } from '../../../../../core/data/course.json';
import { Course } from '../../../../../core/interfaces/course.interface';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss',
})
export class StudentsDialogComponent {
  studentForm: FormGroup;
  coursesList: Course[] = courseList;
  courseSelect: string = '';

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingStudent?: Student
  ) {
    this.studentForm = this.fb.group({
      first_name: ['', Validators.required],
      last_Name: ['', Validators.required],
      course_ids: ['', Validators.required],
    });
    if (this.editingStudent) {
      this.studentForm.patchValue(this.editingStudent);
    }
  }
  onSubmit(): void {
    if (this.studentForm.valid) {
      this.matDialogRef.close(this.studentForm.value);
    } else {
      alert('por favor incluye los valores requeridos');
    }
  }
}
