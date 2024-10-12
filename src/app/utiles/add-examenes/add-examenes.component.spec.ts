import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamenesComponent } from './add-examenes.component';

describe('AddExamenesComponent', () => {
  let component: AddExamenesComponent;
  let fixture: ComponentFixture<AddExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExamenesComponent]
    });
    fixture = TestBed.createComponent(AddExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
