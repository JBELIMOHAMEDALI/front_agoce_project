import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDevisComponent } from './add-update-devis.component';

describe('AddUpdateDevisComponent', () => {
  let component: AddUpdateDevisComponent;
  let fixture: ComponentFixture<AddUpdateDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
