import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GetCityTopPropertiesComponent } from "./get-city-top-properties/get-city-top-properties.component";

const routes: Routes = [{ path: "", component: GetCityTopPropertiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
