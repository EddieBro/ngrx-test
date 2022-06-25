import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Driver} from "../../data-models/driver";
import {createReducer, on} from "@ngrx/store";
import { driverActionsTypes, driversLoaded } from './drivers.actions';


export interface DriverState extends EntityState<Driver> {
  driversLoaded: boolean;
}

export const adapter: EntityAdapter<Driver> = createEntityAdapter<Driver>();

export const initialState = adapter.getInitialState({
  driversLoaded: false
})

export const driverReducer = createReducer(
  initialState,
  on(driverActionsTypes.driversLoaded, (state, action) => {
    return adapter.setAll(
      action.payload,
      {...state, driversLoaded: true}
    )
  }),
  on(driverActionsTypes.addDriver, (state, action) => {
    return adapter.addOne(action.payload, state);
  }),
  on(driverActionsTypes.editDriver, (state, action) => {
    return adapter.updateOne(action.update, state);
  }),
  on(driverActionsTypes.deleteDriver, (state, action) => {
    return adapter.removeOne(action.id, state)
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
