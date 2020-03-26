import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, UrlSegment } from "@angular/router";
import { ApiService } from "../../services/api/api.service";
import { fade } from "../../animations";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
  animations: [fade]
})
export class ItemComponent implements OnInit, OnDestroy {
  result: object = {};
  isLoading: boolean = true;
  isError: boolean = false;
  isComponentMounted: boolean = false;

  constructor(
    private API: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isComponentMounted = true;

    const { url } = this.router;

    this.API.getData(url).subscribe(
      data => {
        if (this.isComponentMounted) {
          this.result = data;
          this.isLoading = false;
        }
      },
      () => {
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

  ngOnDestroy() {
    this.isComponentMounted = false;
  }

  backLink(): UrlSegment {
    return this.route.snapshot.parent.url[0];
  }
}
