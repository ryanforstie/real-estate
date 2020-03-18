import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InvestmentAnalysisRootComponent } from "./investment-analysis-root/investment-analysis-root.component";

const routes: Routes = [
  { path: "", component: InvestmentAnalysisRootComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentAnalysisRoutingModule {}
