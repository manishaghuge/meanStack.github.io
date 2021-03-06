import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ProductsComponent } from './layouts/products/products.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MensComponent } from './Products/mens/mens.component';
import { WomensComponent } from './Products/womens/womens.component';
import { KidsComponent } from './Products/kids/kids.component';
import { CustpipePipe } from './pipes/custpipe.pipe';
import { DiscripipePipe } from './pipes/discripipe.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
import { SimpleStyleDirective } from './directives/simple-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerOneComponent,
    BannerTwoComponent,
    ProductsComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
    CustpipePipe,
    DiscripipePipe,
    DiscountPipe,
    SimpleStyleDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
