import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDriverComponent } from './add-update-driver.component';

describe('AddUpdateDriverComponent', () => {
  let component: AddUpdateDriverComponent;
  let fixture: ComponentFixture<AddUpdateDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
