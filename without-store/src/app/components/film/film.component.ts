import { Component, OnInit, Input } from "@angular/core";
import { Film } from "../../interfaces/film";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"]
})
export class FilmComponent implements OnInit {
  @Input() result: Film = {
    release_date: "",
    producer: "",
    director: "",
    episode_id: "",
    opening_crawl: ""
  };

  constructor() {}

  ngOnInit() {}

  date(): string {
    const { release_date: date } = this.result;
    return date
      .split("-")
      .reverse()
      .join()
      .replace(/[,]/gm, "/");
  }
}
