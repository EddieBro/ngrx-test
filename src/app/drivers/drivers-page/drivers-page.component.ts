import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Driver} from "../../data-models/driver";
import {select, Store} from "@ngrx/store";
import {driverActionsTypes, loadDrivers} from "../store/drivers.actions";
import {getAllDrivers} from "../store/drivers.selectors";
import {AppState} from "../../reducers";
import {MatDialog} from "@angular/material/dialog";
import {AddUpdateDriverComponent} from "../components/add-update-driver/add-update-driver.component";

@Component({
  templateUrl: './drivers-page.component.html',
  styleUrls: ['./drivers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversPageComponent implements OnInit {
  drivers$: Observable<Driver[]> = this.store.pipe(select(getAllDrivers));
  testDriver!: Driver;
  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadDrivers())
  }

  readonly trackById = (_: number, {id}: Driver) => id;

  openDialog(driver?: Driver) {
    this.dialog.open(AddUpdateDriverComponent, {
      data: driver
    });
  }

  editDriver(driver: Driver) {
    this.testDriver = driver;
  }
  deleteDriver(id: string) {
    this.store.dispatch(driverActionsTypes.deleteDriver({id}));
  }
}
