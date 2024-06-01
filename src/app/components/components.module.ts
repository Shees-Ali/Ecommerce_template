import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    HeroSectionComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    NavbarComponent,
    CardComponent,
    HeroSectionComponent,
    SearchComponent,
    FooterComponent
  ],
})
export class ComponentsModule {}
