import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrendsRootComponent } from "./trends-root/trends-root.component";

const routes: Routes = [{ path: "", component: TrendsRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendsRoutingModule {}
