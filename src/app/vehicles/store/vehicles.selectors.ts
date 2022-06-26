import {createFeatureSelector, createSelector} from "@ngrx/store";
import {selectAll, VehicleState} from "./vehicles.reducer";

const vehicleFeatureSelector = createFeatureSelector<VehicleState>('vehicles');

export const getAllVehicles = createSelector(
  vehicleFeatureSelector,
  selectAll
);

export const areVehiclesLoaded = createSelector(
  vehicleFeatureSelector,
  state => state.vehiclesLoaded
);

