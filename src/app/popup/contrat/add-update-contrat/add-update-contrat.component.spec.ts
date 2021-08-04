import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateContratComponent } from './add-update-contrat.component';

describe('AddUpdateContratComponent', () => {
  let component: AddUpdateContratComponent;
  let fixture: ComponentFixture<AddUpdateContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
