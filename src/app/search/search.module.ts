import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { GetCityTopPropertiesComponent } from "./get-city-top-properties/get-city-top-properties.component";
import { SearchRootComponent } from './search-root/search-root.component';

@NgModule({
  declarations: [GetCityTopPropertiesComponent, SearchRootComponent],
  imports: [CommonModule, SearchRoutingModule],
  exports: []
})
export class SearchModule {}
