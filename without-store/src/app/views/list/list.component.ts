import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api/api.service";
import { CategoriesService } from "../../services/categories/categories.service";
import { fade } from "../../animations";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  animations: [fade]
})
export class ListComponent implements OnInit, OnDestroy {
  results: object[] = [];
  isLoading: boolean = true;
  isError: boolean = false;
  isDisabled: boolean = false;
  isComponentMounted: boolean = false;
  nextPage: null | string = null;

  constructor(
    private API: ApiService,
    private categories: CategoriesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isComponentMounted = true;

    const { url } = this.router;

    this.API.getData(url).subscribe(
      data => {
        if (this.isComponentMounted) {
          this.results = data.results;
          this.isLoading = false;
          this.nextPage = data.next;
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

  loadMore(): void {
    if (this.nextPage) {
      this.isDisabled = true;

      this.API.getNextPage(this.nextPage).subscribe(
        data => {
          if (this.isComponentMounted) {
            this.results = [...this.results, ...data.results];
            this.nextPage = data.next;
            this.isDisabled = false;
          }
        },
        () => {
          this.isDisabled = false;
          this.isError = true;
        }
      );
    }
  }

  category(): string {
    const result = this.categories
      .getCategories()
      .filter(
        data => `/${data}`.toLowerCase() === this.router.url.toLowerCase()
      );
    return result[0];
  }
}
