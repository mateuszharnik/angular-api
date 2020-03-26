import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../../interfaces/character";

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.css"]
})
export class CharacterComponent implements OnInit {
  @Input() result: Character = {
    birth_year: "",
    gender: "",
    eye_color: "",
    hair_color: "",
    height: "",
    homeworld: "",
    mass: ""
  };

  constructor() {}

  ngOnInit() {}

  id(): number {
    const { homeworld } = this.result;
    const index = homeworld.substr(homeworld.search(/[0-9]/));
    return parseInt(index, 10);
  }
}
