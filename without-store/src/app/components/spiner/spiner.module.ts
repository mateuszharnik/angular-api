import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinerComponent } from "./spiner.component";

@NgModule({
  declarations: [SpinerComponent],
  exports: [SpinerComponent],
  imports: [CommonModule]
})
export class SpinerModule {}
