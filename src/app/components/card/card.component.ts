import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  categories: string[];
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      title: 'Birdnest Japanese',
      price: 109.95,
      description:
        'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.',
      image: 'assets/images/plant1.jpg',
      categories: ['Air purifying', 'Medium Plants'],
      rating: {
        rate: 2,
        count: 120,
      },
    },
    {
      id: 2,
      title: 'Monstera deliciosa ',
      price: 109.95,
      description:
        'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.',
      image: 'assets/images/plant2.jpeg',
      categories: ['Air purifying', 'Medium Plants'],
      rating: {
        rate: 4,
        count: 120,
      },
    },
    {
      id: 3,
      title: 'Swiss cheese plant',
      price: 109.95,
      description:
        'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.',

      image: 'assets/images/Monstera-deliciosa.jpeg',
      categories: ['Air purifying', 'Medium Plants'],
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 4,
      title: 'Ambrosia',
      price: 109.95,
      description:
        'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.',
      image: 'assets/images/plant3.jpeg',
      categories: ['Air purifying', 'Medium Plants'],
      rating: {
        rate: 5,
        count: 120,
      },
    },
    {
      id: 5,
      title: 'Angel trumpet',
      price: 109.95,
      description:
        'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.',
      image: 'assets/images/plant4.jpeg',
      categories: ['Air purifying', 'Medium Plants'],
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 6,
      title: 'African sheepbush',
      price: 109.95,
      description:
        'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.',
      image: 'assets/images/plant5.jpeg',
      categories: ['Air purifying', 'Medium Plants'],
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.products);
  }
}
