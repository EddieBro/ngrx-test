import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {vehiclesActionsTypes} from './vehicles.actions';
import {Vehicle} from "../../data-models/vehicle";


export interface VehicleState extends EntityState<Vehicle> {
  vehiclesLoaded: boolean;
}

export const adapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>();

export const initialState = adapter.getInitialState({
  vehiclesLoaded: false
})

export const vehicleReducer = createReducer(
  initialState,
  on(vehiclesActionsTypes.vehiclesLoaded, (state, action) => {
    return adapter.setAll(
      action.payload,
      {...state, vehiclesLoaded: true}
    )
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
