import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitantCardComponent } from './assitant-card.component';

describe('AssitantCardComponent', () => {
  let component: AssitantCardComponent;
  let fixture: ComponentFixture<AssitantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssitantCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssitantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
