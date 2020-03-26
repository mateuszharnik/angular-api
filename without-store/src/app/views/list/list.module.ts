import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list.component";
import { CardComponent } from "../../components/card/card.component";
import { SpinerModule } from "../../components/spiner/spiner.module";
import { AlertModule } from "../../components/alert/alert.module";

@NgModule({
  declarations: [ListComponent, CardComponent],
  imports: [SpinerModule, AlertModule, CommonModule, ListRoutingModule]
})
export class ListModule {}
