import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDriverComponent } from './add-update-driver.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {provideMockStore} from "@ngrx/store/testing";
import {forwardRef} from "@angular/core";

describe('AddUpdateDriverComponent', () => {
  let component: AddUpdateDriverComponent;
  let fixture: ComponentFixture<AddUpdateDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [provideMockStore({}),
        {
          provide: MatDialogRef,
          useValue: []
        },
        {
          provide: MAT_DIALOG_DATA, useValue: { }
        }
      ],
      declarations: [ AddUpdateDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
