import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    HeroSectionComponent,
    SearchComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    NavbarComponent,
    CardComponent,
    HeroSectionComponent,
    SearchComponent,
  ],
})
export class ComponentsModule {}
