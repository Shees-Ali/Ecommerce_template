import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavbarComponent, CardComponent],
})
export class ComponentsModule {}
