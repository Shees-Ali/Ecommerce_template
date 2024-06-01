import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(1000, style({ opacity: 1}))
      ]),
    ]),
  ]
})
export class HeroSectionComponent {

}
