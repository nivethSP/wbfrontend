import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhattComponent } from './ghatt.component';

describe('GhattComponent', () => {
  let component: GhattComponent;
  let fixture: ComponentFixture<GhattComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhattComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
