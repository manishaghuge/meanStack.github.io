import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css'],
})
export class MensComponent implements OnInit {
  myProduct = [
    {
      id: 101,
      prodctImage: '../../../assets/mens/tshirt.jpg',
      productName: 'T-shirt',
      proctDiscription: 'Mens T-shirt',
      inStock: 12,
      isOnline: true,
      price: 399999,
    },
    {
      id: 102,
      prodctImage: '../../../assets/mens/casualshirt.jpg',
      productName: 'Casuals Shirt',
      proctDiscription: 'Mean Casuals',
      inStock: 16,
      isOnline: true,
      price: 17000,
    },
    {
      id: 103,
      prodctImage: '../../../assets/mens/jeans.jpg',
      productName: 'Jeans',
      proctDiscription: 'Men Jeans',
      inStock: 2,
      isOnline: false,
      price: 25000,
    },
    {
      id: 104,
      prodctImage: '../../../assets/mens/blezer.jpg',
      productName: 'Blezer',
      proctDiscription: 'Men blezer',
      inStock: 0,
      isOnline: false,
      price: 25000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
