import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CoursesSpaceService } from '../../../../../core/services/courses-space.service';
import { CourseSpace } from '../../../../../core/interfaces/course-space.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  public searchInput = new FormControl('');
  public courses: CourseSpace[] = [];
  public selectedCourse?: CourseSpace;

  constructor(private coursesService: CoursesSpaceService) {}
  search() {
    const value: string = this.searchInput.value || '';

    this.coursesService.getSuggestion(value).subscribe((c) => {
      this.courses = c;
    });
  }
  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedCourse = undefined;
      return;
    }
    const course: CourseSpace = event.option.value;
    if (course.name) {
      this.searchInput.setValue(course.name);
    }
    this.selectedCourse = course;
  }
}
