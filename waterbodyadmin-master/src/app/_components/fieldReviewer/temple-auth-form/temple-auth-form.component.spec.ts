import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleAuthFormComponent } from './temple-auth-form.component';

describe('TempleAuthFormComponent', () => {
  let component: TempleAuthFormComponent;
  let fixture: ComponentFixture<TempleAuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleAuthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
