import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GetInvestmentPerformanceComponent } from "./get-investment-performance/get-investment-performance.component";

const routes: Routes = [
  { path: "investment-analysis", component: GetInvestmentPerformanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentAnalysisRoutingModule {}
