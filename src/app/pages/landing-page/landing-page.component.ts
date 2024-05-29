import { Component } from '@angular/core';
import { Product, products } from '../../interface/product';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  products: Product[] = products;
  filterPlants(search: string) {
    this.products = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
