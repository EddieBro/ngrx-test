import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppState} from "../../../reducers";
import {Store} from "@ngrx/store";
import {addDriver, editDriver} from "../../store/drivers.actions";
import {Driver} from "../../../data-models/driver";
import * as uuid from 'uuid';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Update} from "@ngrx/entity";

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

  readonly fg = this.fb.group( {
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    birthDate: ['', [Validators.required]],
    active: [true, [Validators.required]],
    // vehicleId: [null, [Validators.required]]
  })

  ngOnInit(): void {
    if (this.driver) {
      this.fg.patchValue({
        name: this.driver.name,
        surname: this.driver.surname,
        email: this.driver.email,
        birthDate: this.driver.birthDate,
        active: this.driver.active,
      })
    }
    this.fg.valueChanges.subscribe(data => {
      console.log(data, 'eto form data');
    })
  }
  close () {
    this.matDialogRef.close();
  }

  submit() {
    const name = this.fg.get('name')?.value!;
    const surname = this.fg.get('surname')?.value!;
    const email = this.fg.get('email')?.value!;
    const birthDate = this.fg.get('birthDate')?.value!;
    const active = this.fg.get('active')?.value!;
    if (this.driver) {
      const update: Update<Driver> = {
        id: this.driver.id,
        changes: {
          name,
          surname,
          email,
          birthDate,
          active
        }
      }
      this.store.dispatch(editDriver({update}))
    } else {
      const payload: Driver = {
        id: uuid.v4(),
        name,
        surname,
        email,
        birthDate,
        active,
        vehicleId: '1'
      }
      if (this.fg.valid) {
        this.store.dispatch(addDriver({payload}))
      }
    }
    this.matDialogRef.close();
  }

}
