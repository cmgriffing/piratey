import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MediaRoutingModule } from './media-routing.module';
import { MediaPostComponent } from './post/media-post.component';
import { MediaPageComponent } from './page/media-page.component';

@NgModule({
  declarations: [MediaPostComponent, MediaPageComponent],
  imports: [CommonModule, MediaRoutingModule, ScullyLibModule]
})
export class MediaModule {}
