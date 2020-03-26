import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../../services/categories/categories.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  isOpen: boolean = false;
  isDisabled: boolean = false;
  isExpanded: boolean = false;
  categories: string[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

  active(): string {
    return this.isOpen ? "block" : "hidden";
  }

  expanded(): string {
    return this.isExpanded ? "true" : "false";
  }

  toggleMenu(): void {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
      this.isExpanded = !this.isExpanded;
      this.isDisabled = true;

      setTimeout(() => {
        this.isDisabled = false;
      }, 400);
    }
  }

  closeMenu(): void {
    this.isOpen = false;
    this.isExpanded = false;
  }
}
