import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AppState} from "../../../reducers";
import {Store} from "@ngrx/store";
import {addDriver} from "../../store/drivers.actions";
import {Driver} from "../../../data-models/driver";
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-update-driver',
  templateUrl: './add-update-driver.component.html',
  styleUrls: ['./add-update-driver.component.scss']
})
export class AddUpdateDriverComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  readonly fg = this.fb.group( {
    name: [null, [Validators.required]],
    surname: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    birthDate: [null, [Validators.required]],
    active: [true, [Validators.required]],
    // vehicleId: [null, [Validators.required]]
  })
  ngOnInit(): void {
  }

  submit() {
    console.log('yo!', this.fg);
    const name = this.fg.get('name')?.value!;
    const surname = this.fg.get('surname')?.value!;
    const email = this.fg.get('email')?.value!;
    const birthDate = this.fg.get('birthDate')?.value!;
    const active = this.fg.get('active')?.value!;
    const payload: Driver = {
      id: uuid.v4(),
      name,
      surname,
      email,
      birthDate,
      active,
      vehicleId: '1'
    }
    if (this.fg.value) {
      this.store.dispatch(addDriver({payload}))
    }


    this.fg.valueChanges.subscribe(data => {
      console.log(data, 'eto form data');
    })
  }

}
