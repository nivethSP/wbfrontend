import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form8GhatsComponent } from './form8-ghats.component';

describe('Form8GhatsComponent', () => {
  let component: Form8GhatsComponent;
  let fixture: ComponentFixture<Form8GhatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form8GhatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form8GhatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
