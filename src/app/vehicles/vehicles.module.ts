import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {vehicleReducer} from "./store/vehicles.reducer";
import {EffectsModule} from "@ngrx/effects";
import {VehiclesEffects} from "./store/vehicles.effects";
import {VehiclesService} from "./services/vehicles.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('vehicles', vehicleReducer),
    EffectsModule.forFeature([VehiclesEffects]),
  ],
  providers: [
    VehiclesService
  ]
})
export class VehiclesModule { }
