import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyInvalidationComponent } from './key-invalidation.component';

describe('KeyInvalidationComponent', () => {
  let component: KeyInvalidationComponent;
  let fixture: ComponentFixture<KeyInvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyInvalidationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyInvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
