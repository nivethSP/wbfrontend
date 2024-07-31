import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyfromuppertanksluiceComponent } from './supplyfromuppertanksluice.component';

describe('SupplyfromuppertanksluiceComponent', () => {
  let component: SupplyfromuppertanksluiceComponent;
  let fixture: ComponentFixture<SupplyfromuppertanksluiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyfromuppertanksluiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyfromuppertanksluiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
