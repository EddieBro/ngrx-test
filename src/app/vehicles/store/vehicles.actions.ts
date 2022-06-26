import {createAction, props} from "@ngrx/store";
import {Vehicle} from "../../data-models/vehicle";

export enum VehiclesActionTypes {
  LoadVehicles = '[Vehicles] Load Vehicles',
  LoadVehiclesSuccess = '[Vehicles] Load Vehicles Success',
}

export const loadVehicles = createAction(
  VehiclesActionTypes.LoadVehicles
);

export const vehiclesLoaded = createAction(
  VehiclesActionTypes.LoadVehiclesSuccess,
  props<{ payload: Vehicle[] }>()
);

export const vehiclesActionsTypes = {
  loadVehicles,
  vehiclesLoaded
}
