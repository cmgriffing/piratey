import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class NewsPageComponent implements OnInit {
  newsPosts = [];

  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService) {}

  ngOnInit() {
    this.scully.available$.subscribe(links => {
      console.log('available links', links);
      this.newsPosts = links.filter(link => link.contentType === 'news');
    });
  }
}
