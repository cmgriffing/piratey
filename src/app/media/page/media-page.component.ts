import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';

import { ScullyRoutesService } from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class MediaPageComponent implements OnInit {
  mediaPosts = [];

  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService) {}

  ngOnInit() {
    this.scully.available$.subscribe(links => {
      console.log('available links', links);
      this.mediaPosts = links.filter(link => link.contentType === 'media');
    });

    this.scully.topLevel$.subscribe(links => {
      console.log('topLevel links', links);
    });

    this.scully.unPublished$.subscribe(links => {
      console.log('unPublished links', links);
    });

    this.scully.allRoutes$.subscribe(links => {
      console.log('all links', links);
    });
  }
}
