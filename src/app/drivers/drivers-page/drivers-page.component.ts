import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Driver} from "../../data-models/driver";
import {select, Store} from "@ngrx/store";
import {driverActionsTypes, loadDrivers} from "../store/drivers.actions";
import {getAllDrivers} from "../store/drivers.selectors";
import {AppState} from "../../reducers";

@Component({
  templateUrl: './drivers-page.component.html',
  styleUrls: ['./drivers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversPageComponent implements OnInit {
  drivers$: Observable<Driver[]> = this.store.pipe(select(getAllDrivers))
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadDrivers())
  }

  readonly trackById = (_: number, {id}: Driver) => id;

  deleteDriver(id: string) {
    this.store.dispatch(driverActionsTypes.deleteDriver({id}));
  }
}
