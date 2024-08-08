import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CourseSpace } from '../../../../../core/interfaces/course-space.interface';
import { CoursesSpacesService } from '../../../../../core/services/courses-spaces.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  public searchInput = new FormControl('');
  public courses: CourseSpace[] = [];
  public selectedCourse?: CourseSpace;

  constructor(private coursesSpacesService: CoursesSpacesService) {}
  search() {
    const value: string = this.searchInput.value || '';

    this.coursesSpacesService.getSuggestion(value).subscribe((c) => {
      this.courses = c;
    });
  }
  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedCourse = undefined;
      return;
    }
    const course: CourseSpace = event.option.value;
    this.searchInput.setValue(course.name);
    this.selectedCourse = course;
  }
}
