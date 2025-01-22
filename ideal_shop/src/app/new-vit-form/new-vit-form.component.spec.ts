import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVitFormComponent } from './new-vit-form.component';

describe('NewVitFormComponent', () => {
  let component: NewVitFormComponent;
  let fixture: ComponentFixture<NewVitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVitFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewVitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
