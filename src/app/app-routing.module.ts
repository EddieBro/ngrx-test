import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'drivers', loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule)},
  {path: '', loadChildren: () => import('./about/about-routing.module').then(m => m.AboutRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
