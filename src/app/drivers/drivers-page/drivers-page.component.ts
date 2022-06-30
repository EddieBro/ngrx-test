import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {combineLatest, map, Observable} from "rxjs";
import {Driver} from "@models/driver";
import {select, Store} from "@ngrx/store";
import {driverActionsTypes, loadDrivers} from "../store/drivers.actions";
import {getAllDrivers} from "../store/drivers.selectors";
import {AppState} from "../../reducers";
import {MatDialog} from "@angular/material/dialog";
import {AddUpdateDriverComponent} from "../components/add-update-driver/add-update-driver.component";
import {Vehicle} from "@models/vehicle";
import {getAllVehicles} from "../../vehicles/store/vehicles.selectors";
import {loadVehicles} from "../../vehicles/store/vehicles.actions";

export interface DriversPreparedData extends Driver {
  registrationNumber: string;
}

@Component({
  templateUrl: './drivers-page.component.html',
  styleUrls: ['./drivers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversPageComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog
  ) { }

  drivers$: Observable<Driver[]> = this.store.pipe(select(getAllDrivers));
  vehicles$: Observable<Vehicle[]> = this.store.pipe(select(getAllVehicles));
  preparedDrivers$: Observable<DriversPreparedData[]> = combineLatest([this.drivers$, this.vehicles$]).pipe(
    map((data) => {
      const vehicleIdMap = new Map();
      data[1].forEach(vehicle => {
        vehicleIdMap.set(vehicle.id, vehicle.registrationNumber)
      });
      return data[0].map(driver => ({
        ...driver,
        registrationNumber: vehicleIdMap.get(driver.vehicleId)
      }))
    })
  )

  ngOnInit(): void {
    this.store.dispatch(loadDrivers());
    this.store.dispatch(loadVehicles());
  }

  openDialog(driver?: Driver) {
    this.dialog.open(AddUpdateDriverComponent, {
      data: driver
    });
  }

  deleteDriver(id: string) {
    this.store.dispatch(driverActionsTypes.deleteDriver({id}));
  }
}
