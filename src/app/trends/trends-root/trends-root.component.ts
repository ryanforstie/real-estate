import { Component, OnInit, Input } from "@angular/core";
import { MashvisorService } from "../../mashvisor.service";

@Component({
  selector: "app-trends-root",
  templateUrl: "./trends-root.component.html",
  styleUrls: ["./trends-root.component.css"],
})
export class TrendsRootComponent implements OnInit {
  @Input() contents: [];

  constructor(private mashvisor: MashvisorService) {}

  ngOnInit(): void {}

  onTopMarketSearch(state: string) {
    this.mashvisor.topMarketSearch(state).subscribe((response) => {
      this.contents = response.content;
      console.log(response);
    });
  }
}
