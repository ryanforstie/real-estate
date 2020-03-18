import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { GetCityTopPropertiesComponent } from "./get-city-top-properties/get-city-top-properties.component";

@NgModule({
  declarations: [GetCityTopPropertiesComponent],
  imports: [CommonModule, SearchRoutingModule],
  exports: []
})
export class SearchModule {}
