import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Students } from '../../models/students.interface';
import { Course } from '../../models/course.interface';
import { courseList } from '../../models/course.json';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss',
})
export class StudentsDialogComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingStudent?: Course
  ) {
    this.studentForm = this.fb.group({
      name: [null, Validators.required],
      lastName: [],
      courses: [],
    });
    if (this.editingStudent) {
      this.studentForm.patchValue(this.editingStudent);
    }
  }
  onSubmit(): void {
    if (this.studentForm.valid) {
      this.matDialogRef.close(this.studentForm.value);
    } else {
      //warning
    }

    /* if (
      this.studentForm.value.name == null ||
      this.studentForm.value.name == ''
    ) {
    }  */
  }
}
