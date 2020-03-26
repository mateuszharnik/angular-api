import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Card } from "../../interfaces/card";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() result: Card = {
    url: "",
    name: "",
    title: ""
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  id(): number {
    const { url } = this.result;
    const index = url.substr(url.search(/[0-9]/));
    const id = parseInt(index, 10);
    return id;
  }

  path(): string {
    const { url } = this.router;
    return url;
  }
}
