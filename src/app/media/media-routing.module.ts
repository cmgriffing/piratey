import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaPostComponent } from './post/media-post.component';
import { MediaPageComponent } from './page/media-page.component';

const routes: Routes = [
  {
    path: '',
    component: MediaPageComponent
  },
  {
    path: ':slug',
    component: MediaPostComponent
  },
  {
    path: '**',
    component: MediaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule {}
