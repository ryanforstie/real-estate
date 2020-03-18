import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvestmentAnalysisRoutingModule } from "./investment-analysis-routing.module";
import { GetInvestmentPerformanceComponent } from "./get-investment-performance/get-investment-performance.component";
import { InvestmentAnalysisRootComponent } from "./investment-analysis-root/investment-analysis-root.component";

@NgModule({
  declarations: [
    GetInvestmentPerformanceComponent,
    InvestmentAnalysisRootComponent
  ],
  imports: [CommonModule, InvestmentAnalysisRoutingModule],
  exports: []
})
export class InvestmentAnalysisModule {}
