import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditAddComponent } from './doctor-edit-add.component';

describe('DoctorEditAddComponent', () => {
  let component: DoctorEditAddComponent;
  let fixture: ComponentFixture<DoctorEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorEditAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
