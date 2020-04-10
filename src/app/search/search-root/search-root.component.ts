import { Component, OnInit, Input } from "@angular/core";
import { MashvisorService } from "../../mashvisor.service";

@Component({
  selector: "app-search-root",
  templateUrl: "./search-root.component.html",
  styleUrls: ["./search-root.component.css"],
})
export class SearchRootComponent implements OnInit {
  @Input() properties: [];

  constructor(private mashvisor: MashvisorService) {}

  ngOnInit(): void {}

  onTopCityPropertiesSearch(searchTerms: any) {
    this.mashvisor
      .topCityPropertiesSearch(searchTerms.state, searchTerms.city)
      .subscribe((response) => {
        this.properties = response.content.properties;
        console.log(response);
      });
  }
}
