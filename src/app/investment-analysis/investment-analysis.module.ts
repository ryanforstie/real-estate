import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvestmentAnalysisRoutingModule } from "./investment-analysis-routing.module";
import { GetInvestmentPerformanceComponent } from "./get-investment-performance/get-investment-performance.component";

@NgModule({
  declarations: [GetInvestmentPerformanceComponent],
  imports: [CommonModule, InvestmentAnalysisRoutingModule],
  exports: [GetInvestmentPerformanceComponent]
})
export class InvestmentAnalysisModule {}
