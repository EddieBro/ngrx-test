import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Driver} from "@models/driver";
import {DriversPreparedData} from "../../drivers-page/drivers-page.component";

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss']
})
export class DriverCardComponent {
  @Input() driver!: DriversPreparedData;
  @Output() openDialog = new EventEmitter<Driver>();
  @Output() deleteDriver = new EventEmitter<string>();

  constructor() { }


}
