import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GetCitySummaryComponent } from "./get-city-summary/get-city-summary.component";

const routes: Routes = [{ path: "", component: GetCitySummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendsRoutingModule {}
