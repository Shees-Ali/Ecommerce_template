import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent, HeroSectionComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavbarComponent, CardComponent, HeroSectionComponent],
})
export class ComponentsModule {}
