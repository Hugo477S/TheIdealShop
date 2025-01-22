import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTutorialComponent } from './new-tutorial.component';

describe('NewTutorialComponent', () => {
  let component: NewTutorialComponent;
  let fixture: ComponentFixture<NewTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTutorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
