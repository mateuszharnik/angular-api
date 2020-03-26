import { Component, OnInit, Input } from "@angular/core";
import { Specie } from "../../interfaces/specie";

@Component({
  selector: "app-specie",
  templateUrl: "./specie.component.html",
  styleUrls: ["./specie.component.css"]
})
export class SpecieComponent implements OnInit {
  @Input() result: Specie = {
    homeworld: "",
    language: "",
    average_height: "",
    average_lifespan: "",
    skin_colors: ""
  };

  constructor() {}

  ngOnInit() {}

  id(): number {
    const { homeworld } = this.result;
    const index = homeworld.substr(homeworld.search(/[0-9]/));
    return parseInt(index, 10);
  }
}
