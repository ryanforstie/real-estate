import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrendsRoutingModule } from "./trends-routing.module";
import { TrendsRootComponent } from "./trends-root/trends-root.component";
import { ListTopMarketsComponent } from './list-top-markets/list-top-markets.component';

@NgModule({
  declarations: [TrendsRootComponent, ListTopMarketsComponent],
  imports: [CommonModule, TrendsRoutingModule],
  exports: [],
})
export class TrendsModule {}
