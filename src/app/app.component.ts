import { Component, OnInit } from "@angular/core";
import { getBitcoinPrice } from "./api/Bitcoin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor() {}
  async ngOnInit() {
    this.result = await getBitcoinPrice();
    this.loading = false;
  }
  title = "ionic-angular-bitcoin";
  loading: boolean = true;
  result: any = {};

  get bitcoinData() {
    return Object.keys(this.result.bpi || {}).map(
      item => this.result.bpi[item]
    );
  }
}
