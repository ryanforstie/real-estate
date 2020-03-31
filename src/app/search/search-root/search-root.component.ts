import { Component, OnInit, Input } from "@angular/core";
import { MashvisorService } from "../../mashvisor.service";

@Component({
  selector: "app-search-root",
  templateUrl: "./search-root.component.html",
  styleUrls: ["./search-root.component.css"]
})
export class SearchRootComponent implements OnInit {
  @Input() properties: [];

  constructor(private mashvisor: MashvisorService) {}

  ngOnInit(): void {}

  onState(state: string) {
    this.mashvisor.search(state).subscribe(response => {
      this.properties = response.content.properties;
      console.log(response);
    });
  }
}
