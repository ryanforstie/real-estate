import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SearchRoutingModule } from "./search-routing.module";
import { GetCityTopPropertiesComponent } from "./get-city-top-properties/get-city-top-properties.component";
import { SearchRootComponent } from "./search-root/search-root.component";

@NgModule({
  declarations: [GetCityTopPropertiesComponent, SearchRootComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule],
  exports: []
})
export class SearchModule {}
