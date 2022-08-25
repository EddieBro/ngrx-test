import {RouterModule, Routes} from "@angular/router";
import {AboutPageComponent} from "./about-page/about-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: AboutPageComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
