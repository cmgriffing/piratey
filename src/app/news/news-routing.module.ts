import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPageComponent } from './page/news-page.component';
import { NewsPostComponent } from './post/news-post.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent
  },
  {
    path: ':slug',
    component: NewsPostComponent
  },
  {
    path: '**',
    component: NewsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
