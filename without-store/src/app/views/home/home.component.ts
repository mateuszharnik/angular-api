import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../../services/categories/categories.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  categories: string[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }
}
