import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "bitcoin-card",
  templateUrl: "./bitcoin-card.component.html",
  styleUrls: ["./bitcoin-card.component.scss"]
})
export class BitcoinCardComponent implements OnInit {
  @Input() data: Array<any> = [];
  constructor() {}

  ngOnInit() {}
}
