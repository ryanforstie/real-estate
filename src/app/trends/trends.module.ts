import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrendsRoutingModule } from "./trends-routing.module";
import { GetCitySummaryComponent } from "./get-city-summary/get-city-summary.component";
import { TrendsRootComponent } from './trends-root/trends-root.component';

@NgModule({
  declarations: [GetCitySummaryComponent, TrendsRootComponent],
  imports: [CommonModule, TrendsRoutingModule],
  exports: []
})
export class TrendsModule {}
