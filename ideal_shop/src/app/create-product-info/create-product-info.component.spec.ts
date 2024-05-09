import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductInfoComponent } from './create-product-info.component';

describe('CreateProductInfoComponent', () => {
  let component: CreateProductInfoComponent;
  let fixture: ComponentFixture<CreateProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProductInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
