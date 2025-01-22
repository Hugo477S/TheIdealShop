import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaitageFormComponent } from './new-laitage-form.component';

describe('NewLaitageFormComponent', () => {
  let component: NewLaitageFormComponent;
  let fixture: ComponentFixture<NewLaitageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLaitageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewLaitageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
