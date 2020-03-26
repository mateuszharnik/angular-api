import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  categories: string[] = ["People", "Planets", "Species", "Films"];

  constructor() {}

  getCategories(): string[] {
    return this.categories;
  }
}
