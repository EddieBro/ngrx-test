import {createFeatureSelector, createSelector} from "@ngrx/store";
import {DriverState, selectAll} from "./drivers.reducer";
import * as fromDriversReducer from './drivers.reducer';

const driverFeatureSelector = createFeatureSelector<DriverState>('drivers');

export const getAllDrivers = createSelector(
  driverFeatureSelector,
  selectAll
);

export const areDriversLoaded = createSelector(
  driverFeatureSelector,
  state => state.driversLoaded
);

