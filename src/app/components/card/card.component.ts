import { Component, Input } from '@angular/core';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('products') products: Product[] = [];
}
