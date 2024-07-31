import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurplusfromuppertankComponent } from './surplusfromuppertank.component';

describe('SurplusfromuppertankComponent', () => {
  let component: SurplusfromuppertankComponent;
  let fixture: ComponentFixture<SurplusfromuppertankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurplusfromuppertankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurplusfromuppertankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
