import { NgModule } from '@angular/core';
import { UsersPageComponent } from './users-page/users-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: UsersPageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
