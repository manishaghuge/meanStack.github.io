import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-one',
  template: `
    <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot no-pad-top">
        <div class="carousel carousel-slider">
          <a class="carousel-item" href="#one!"
            ><img src="../../../assets/slide/s.jpg"
          /></a>
          <a class="carousel-item" href="#two!"
            ><img src="../../../assets/slide/slide1.jpg"
          /></a>
          <a class="carousel-item" href="#three!"
            ><img src="../../../assets/slide/slide2.jpg"
          /></a>
          <a class="carousel-item" href="#four!"
            ><img src="../../../assets/slide/slide3.jpg"
          /></a>
          <a class="carousel-item" href="#five!"
            ><img src="../../../assets/slide/slide4.jpg"
          /></a>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class BannerOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
