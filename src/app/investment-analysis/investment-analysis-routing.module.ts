import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GetInvestmentPerformanceComponent } from "./get-investment-performance/get-investment-performance.component";

const routes: Routes = [
  { path: "", component: GetInvestmentPerformanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentAnalysisRoutingModule {}
