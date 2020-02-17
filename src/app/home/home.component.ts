import { ScullyRoutesService } from "@scullyio/ng-lib";
import { Observable } from "rxjs";

@Component()
//...
export class HomeComponent implements OnInit {
  links$: Observable<any> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$.subscribe(links => {
      console.log(links);
    });
  }
}
