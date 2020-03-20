import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-get-city-top-properties",
  templateUrl: "./get-city-top-properties.component.html",
  styleUrls: ["./get-city-top-properties.component.css"]
})
export class GetCityTopPropertiesComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  state = "";
  city = "";

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.state);
  }
}
