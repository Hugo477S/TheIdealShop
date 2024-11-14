import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitFormComponent } from './vit-form.component';

describe('VitFormComponent', () => {
  let component: VitFormComponent;
  let fixture: ComponentFixture<VitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VitFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
