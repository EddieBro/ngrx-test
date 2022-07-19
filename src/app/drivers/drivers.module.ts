import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DriversRoutingModule} from "./drivers-routing.module";
import { DriversPageComponent } from './drivers-page/drivers-page.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {DriversEffects} from "./store/drivers.effects";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {driverReducer} from "./store/drivers.reducer";
import { AddUpdateDriverComponent } from './components/add-update-driver/add-update-driver.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DriversService} from "./services/drivers.service";
import {VehiclesModule} from "../vehicles/vehicles.module";
import {MatSelectModule} from "@angular/material/select";
import { DriverCardComponent } from './components/driver-card/driver-card.component';


@NgModule({
  declarations: [
    DriversPageComponent,
    AddUpdateDriverComponent,
    DriverCardComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    StoreModule.forFeature('drivers', driverReducer),
    EffectsModule.forFeature([DriversEffects]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    VehiclesModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [
    DriversService
  ]
})
export class DriversModule { }
