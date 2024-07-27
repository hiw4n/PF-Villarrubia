import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../../../../core/models/course.interface';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrl: './courses-dialog.component.scss',
  /* changeDetection: [ChangeDetectionStrategy.OnPush], */
})
export class CoursesDialogComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Course
  ) {
    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      startDate: [],
      endDate: [],
    });
    if (this.editingCourse) {
      this.courseForm.patchValue(this.editingCourse);
    }
  }
  onSubmit(): void {
    if (this.courseForm.valid) {
      this.matDialogRef.close(this.courseForm.value);
    } else {
      //warning
    }

    /* if (
      this.courseForm.value.name == null ||
      this.courseForm.value.name == ''
    ) {
    }  */
  }
}
