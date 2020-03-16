import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchModule } from "./search/search.module";
import { InvestmentAnalysisModule } from "./investment-analysis/investment-analysis.module";
import { TrendsModule } from "./trends/trends.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    InvestmentAnalysisModule,
    TrendsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
