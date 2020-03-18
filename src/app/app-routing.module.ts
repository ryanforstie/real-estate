import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "search",
    loadChildren: () =>
      import("./search/search.module").then(m => m.SearchModule)
  },
  {
    path: "trends",
    loadChildren: () =>
      import("./trends/trends.module").then(m => m.TrendsModule)
  },
  {
    path: "investment-analysis",
    loadChildren: () =>
      import("./investment-analysis/investment-analysis.module").then(
        m => m.InvestmentAnalysisModule
      )
  },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
