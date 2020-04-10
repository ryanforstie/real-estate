import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-list-top-markets",
  templateUrl: "./list-top-markets.component.html",
  styleUrls: ["./list-top-markets.component.css"],
})
export class ListTopMarketsComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  @Input() contents = [];
  state: string = "";

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit() {
    event.preventDefault();
    this.submitted.emit(this.state);
  }
}
