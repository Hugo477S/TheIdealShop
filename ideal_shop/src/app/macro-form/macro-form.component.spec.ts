import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroFormComponent } from './macro-form.component';

describe('MacroFormComponent', () => {
  let component: MacroFormComponent;
  let fixture: ComponentFixture<MacroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MacroFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
