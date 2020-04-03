import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-get-city-top-properties",
  templateUrl: "./get-city-top-properties.component.html",
  styleUrls: ["./get-city-top-properties.component.css"]
})
export class GetCityTopPropertiesComponent implements OnInit {
  @Output() submitted = new EventEmitter<object>();
  @Input() properties = [];
  state: string = "";
  city: string = "";

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit() {
    event.preventDefault();
    this.submitted.emit({ state: this.state, city: this.city });
  }
}
