import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../../../../core/interfaces/student.interface';
import { CourseSpace } from '../../../../../core/interfaces/course-space.interface';
import { CoursesSpaceService } from '../../../../../core/services/courses-space.service';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss',
})
export class StudentsDialogComponent implements OnInit {
  studentForm: FormGroup;
  dataCourses$: CourseSpace[] = [];
  courseSelect: string = '';

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesSpaceService,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingStudent?: Student
  ) {
    this.studentForm = this.fb.group({
      first_name: [''],
      last_Name: [''],
      course_ids: [''],
    });
    if (this.editingStudent) {
      this.studentForm.patchValue(this.editingStudent);
    }
  }
  ngOnInit(): void {
    this.coursesService.get().subscribe((a) => (this.dataCourses$ = a));
  }
  onSubmit(): void {
    if (this.studentForm.valid) {
      this.matDialogRef.close(this.studentForm.value);
    } else {
      alert('por favor incluye los valores requeridos');
    }
  }
}
