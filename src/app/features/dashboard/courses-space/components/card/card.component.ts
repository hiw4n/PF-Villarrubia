import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../../../../core/interfaces/course.interface';

@Component({
  selector: 'courses-space-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() public courseInput!: Course;

  ngOnInit(): void {
    if (!this.courseInput) throw new Error('Course propertu is required');
  }
}
