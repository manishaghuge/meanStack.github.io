import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css'],
})
export class MensComponent implements OnInit {
  data = {
    myname: 'manisha',
    age: 20,
  };
  myProduct = [
    {
      id: 101,
      prodctImage: '../../../assets/mens/tshirt.jpg',
      productName: 'T-shirt',
      proctDiscription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique laboriosam a
doloribus magni hic dolore facere ab, cum illum magnam ad fugiat ipsa tenetur
deleniti, provident dolores sunt nesciunt nisi.`,
      inStock: 12,
      isOnline: true,
      price: 2000,
      discountp: 10,
    },
    {
      id: 102,
      prodctImage: '../../../assets/mens/casualshirt.jpg',
      productName: 'Casuals Shirt',
      proctDiscription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique laboriosam a
doloribus magni hic dolore facere ab, cum illum magnam ad fugiat ipsa tenetur
deleniti, provident dolores sunt nesciunt nisi.`,
      inStock: 16,
      isOnline: true,
      price: 1000,
      discountp: 40,
    },
    {
      id: 103,
      prodctImage: '../../../assets/mens/jeans.jpg',
      productName: 'Jeans',
      proctDiscription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique laboriosam a
doloribus magni hic dolore facere ab, cum illum magnam ad fugiat ipsa tenetur
deleniti, provident dolores sunt nesciunt nisi.`,
      inStock: 2,
      isOnline: false,
      price: 2500,
      discountp: 20,
    },
    {
      id: 104,
      prodctImage: '../../../assets/mens/blezer.jpg',
      productName: 'Blezer',
      proctDiscription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique laboriosam a
doloribus magni hic dolore facere ab, cum illum magnam ad fugiat ipsa tenetur
deleniti, provident dolores sunt nesciunt nisi.`,
      inStock: 0,
      isOnline: false,
      price: 1500,
      discountp: 20,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  togglePipe: boolean = true;
  showMore: boolean = true;
  showMoreText() {
    this.togglePipe = !this.togglePipe;
  }
}
