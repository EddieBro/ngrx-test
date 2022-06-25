import {createAction, props} from "@ngrx/store";
import {Driver} from "../../data-models/driver";
import {Update} from '@ngrx/entity';

export enum DriversActionTypes {
  LoadDrivers = '[Drivers] Load Drivers',
  LoadDriversSuccess = '[Drivers] Load Drivers Success',
  AddDriver = '[Drivers] Add driver',
  UpdateDriver = '[Drivers] Update driver',
  DeleteDriver = '[Drivers] Delete driver',
}

export const loadDrivers = createAction(
  DriversActionTypes.LoadDrivers
);

export const driversLoaded = createAction(
  DriversActionTypes.LoadDriversSuccess,
  props<{ payload: Driver[] }>()
);

export const addDriver = createAction(
  DriversActionTypes.AddDriver,
  props<{payload: Driver}>()
);


export const editDriver = createAction(
  DriversActionTypes.UpdateDriver,
  props<{update: Update<Driver>}>()
);

export const deleteDriver = createAction(
  DriversActionTypes.DeleteDriver,
  props<{ id: string }>()
);

export const driverActionsTypes = {
  loadDrivers,
  driversLoaded,
  addDriver,
  editDriver,
  deleteDriver
}
