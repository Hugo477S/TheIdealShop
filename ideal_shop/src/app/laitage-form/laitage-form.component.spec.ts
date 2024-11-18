import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaitageFormComponent } from './laitage-form.component';

describe('LaitageFormComponent', () => {
  let component: LaitageFormComponent;
  let fixture: ComponentFixture<LaitageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaitageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaitageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
