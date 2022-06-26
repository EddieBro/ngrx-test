import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DriversPageComponent } from './drivers-page.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";

describe('DriversPageComponent', () => {
  let component: DriversPageComponent;
  let fixture: ComponentFixture<DriversPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, ReactiveFormsModule],
      providers: [provideMockStore({})],
      declarations: [ DriversPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
