import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigProductComponent } from './navig-product.component';

describe('NavigProductComponent', () => {
  let component: NavigProductComponent;
  let fixture: ComponentFixture<NavigProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
