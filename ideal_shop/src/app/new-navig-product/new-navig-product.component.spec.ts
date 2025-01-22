import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNavigProductComponent } from './new-navig-product.component';

describe('NewNavigProductComponent', () => {
  let component: NewNavigProductComponent;
  let fixture: ComponentFixture<NewNavigProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewNavigProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewNavigProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
