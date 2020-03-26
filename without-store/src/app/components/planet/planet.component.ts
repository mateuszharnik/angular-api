import { Component, OnInit, Input } from "@angular/core";
import { Planet } from "../../interfaces/planet";

@Component({
  selector: "app-planet",
  templateUrl: "./planet.component.html",
  styleUrls: ["./planet.component.css"]
})
export class PlanetComponent implements OnInit {
  @Input() result: Planet = {
    climate: "",
    population: "",
    gravity: "",
    terrain: ""
  };

  constructor() {}

  ngOnInit() {}
}
