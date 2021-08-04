import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDevisDetaileComponent } from './add-update-devis-detaile.component';

describe('AddUpdateDevisDetaileComponent', () => {
  let component: AddUpdateDevisDetaileComponent;
  let fixture: ComponentFixture<AddUpdateDevisDetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDevisDetaileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDevisDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
