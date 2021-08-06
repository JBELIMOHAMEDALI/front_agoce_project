import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileDevisComponent } from './detaile-devis.component';

describe('DetaileDevisComponent', () => {
  let component: DetaileDevisComponent;
  let fixture: ComponentFixture<DetaileDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaileDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
