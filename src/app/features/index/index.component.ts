import { Component, OnInit } from '@angular/core';
import { Hero } from '../../core/interfaces/hero.interface';
import { HeroService } from '../../core/services/hero.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  public hero: Hero[] = [];

  constructor(private heroservice: HeroService) {}

  ngOnInit() {
    this.heroservice.get().subscribe((arg) => (this.hero = arg));
  }
}
