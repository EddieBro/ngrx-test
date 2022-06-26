import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {vehiclesActionsTypes} from "./vehicles.actions";
import {concatMap, map, tap} from "rxjs";
import {Router} from "@angular/router";
import {VehiclesService} from "../services/vehicles.service";

@Injectable()
export class VehiclesEffects {
  constructor(
    private actions$: Actions,
    private vehiclesService: VehiclesService,
    private router: Router
  ) {}
  loadVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(vehiclesActionsTypes.loadVehicles),
      concatMap(()=> this.vehiclesService.getVehicles()),
      map(vehicles => vehiclesActionsTypes.vehiclesLoaded({payload: vehicles}))
    )
  );
}
