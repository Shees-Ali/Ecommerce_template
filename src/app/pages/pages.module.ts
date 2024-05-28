import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsModule } from '../components/components.module';
import { CardComponent } from './landing-page/card/card.component';

@NgModule({
  declarations: [LandingPageComponent, CardComponent],
  imports: [CommonModule, FormsModule, PagesRoutingModule, ComponentsModule],
})
export class PagesModule {}
