import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoListComponent } from './product-info-list.component';

describe('ProductInfoListComponent', () => {
  let component: ProductInfoListComponent;
  let fixture: ComponentFixture<ProductInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductInfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
