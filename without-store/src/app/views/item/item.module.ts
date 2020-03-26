import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemRoutingModule } from "./item-routing.module";
import { ItemComponent } from "./item.component";
import { FilmComponent } from "../../components/film/film.component";
import { PlanetComponent } from "../../components/planet/planet.component";
import { CharacterComponent } from "../../components/character/character.component";
import { SpecieComponent } from "../../components/specie/specie.component";
import { AlertModule } from "../../components/alert/alert.module";
import { SpinerModule } from "../../components/spiner/spiner.module";

@NgModule({
  declarations: [
    ItemComponent,
    FilmComponent,
    PlanetComponent,
    SpecieComponent,
    CharacterComponent
  ],
  imports: [AlertModule, SpinerModule, CommonModule, ItemRoutingModule]
})
export class ItemModule {}
