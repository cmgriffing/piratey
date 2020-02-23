import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NewsRoutingModule } from './news-routing.module';
import { NewsPageComponent } from './page/news-page.component';
import { NewsPostComponent } from './post/news-post.component';

@NgModule({
  declarations: [NewsPageComponent, NewsPostComponent],
  imports: [CommonModule, NewsRoutingModule, ScullyLibModule]
})
export class NewsModule {}
