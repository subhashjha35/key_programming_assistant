import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyDuplicationComponent } from './key-duplication.component';

describe('KeyDuplicationComponent', () => {
  let component: KeyDuplicationComponent;
  let fixture: ComponentFixture<KeyDuplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyDuplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyDuplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
