import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppState} from "../../../reducers";
import {select, Store} from "@ngrx/store";
import {addDriver, editDriver} from "../../store/drivers.actions";
import {Driver} from "@models/driver";
import * as uuid from 'uuid';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Update} from "@ngrx/entity";
import {Observable} from "rxjs";
import {Vehicle} from "@models/vehicle";
import {getAllVehicles} from "../../../vehicles/store/vehicles.selectors";

interface DriverForm {
  id: string,
  name: string,
  surname: string,
  email: string
  birthDate: string,
  active: boolean,
  vehicleId: string
}

@Component({
  selector: 'app-add-update-driver',
  templateUrl: './add-update-driver.component.html',
  styleUrls: ['./add-update-driver.component.scss']
})

export class AddUpdateDriverComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private matDialogRef: MatDialogRef<AddUpdateDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public driver: Driver,
  ) { }

  vehicles$: Observable<Vehicle[]> = this.store.pipe(select(getAllVehicles));

  readonly fg = this.fb.group( {
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    birthDate: ['', [Validators.required]],
    active: [true, [Validators.required]],
    vehicleId: ['', [Validators.required]]
  })

  ngOnInit(): void {
    if (this.driver) {
      this.fg.patchValue({
        name: this.driver.name,
        surname: this.driver.surname,
        email: this.driver.email,
        birthDate: this.driver.birthDate,
        active: this.driver.active,
        vehicleId: this.driver.vehicleId
      })
    }
  }
  close () {
    this.matDialogRef.close();
  }

  submit() {
    const data = this.fg.value as DriverForm;
    if (this.driver && this.fg.value) {
      const update: Update<Driver> = {
        id: this.driver.id,
        changes: data
      }
      this.store.dispatch(editDriver({update}))
      this.matDialogRef.close();
    } else {
      const payload: Driver = {
        ...data,
        id: uuid.v4()
      }
      if (this.fg.valid) {
        this.store.dispatch(addDriver({payload}))
        this.matDialogRef.close();
      }
    }

  }

}
