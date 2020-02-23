import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { NewsComponent } from './news/news.component';
import { HomeMediaComponent } from './media/media.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    FeaturesComponent,
    NewsComponent,
    HomeMediaComponent,
    PurchaseComponent,
    ContactComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
