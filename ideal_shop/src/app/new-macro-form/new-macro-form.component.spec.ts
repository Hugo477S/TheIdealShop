import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMacroFormComponent } from './new-macro-form.component';

describe('NewMacroFormComponent', () => {
  let component: NewMacroFormComponent;
  let fixture: ComponentFixture<NewMacroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMacroFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMacroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
