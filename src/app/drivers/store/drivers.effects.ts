import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {DriversService} from "../services/drivers.service";
import {driverActionsTypes} from "./drivers.actions";
import {concatMap, map, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class DriversEffects {
  constructor(
    private actions$: Actions,
    private driverService: DriversService,
    private router: Router
  ) {}
  loadDrivers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(driverActionsTypes.loadDrivers),
      concatMap(()=> this.driverService.getDrivers()),
      map(drivers => driverActionsTypes.driversLoaded({payload: drivers}))
    )
  );
  addDriver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(driverActionsTypes.addDriver),
      concatMap((action) => this.driverService.addDriver(action.payload)),
      tap(() => this.router.navigateByUrl('/drivers'))
    ),
  {dispatch: false}
  );
  updateDriver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(driverActionsTypes.editDriver),
      concatMap((action) => this.driverService.updateDriver(action.update.id, action.update.changes))
    ),
  {dispatch: false}
  );
  deleteDriver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(driverActionsTypes.deleteDriver),
      concatMap((action) => this.driverService.deleteDriver(action.id)),
    ),
    {dispatch: false}
  )
}
