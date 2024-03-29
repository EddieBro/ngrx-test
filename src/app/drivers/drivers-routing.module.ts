import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DriversPageComponent} from "./drivers-page/drivers-page.component";

const routes: Routes = [
  {path: '', component: DriversPageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
