import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrendsRoutingModule } from "./trends-routing.module";
import { GetCitySummaryComponent } from "./get-city-summary/get-city-summary.component";

@NgModule({
  declarations: [GetCitySummaryComponent],
  imports: [CommonModule, TrendsRoutingModule],
  exports: [GetCitySummaryComponent]
})
export class TrendsModule {}
