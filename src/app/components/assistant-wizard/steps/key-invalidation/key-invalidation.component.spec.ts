import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideMockStore } from '@ngrx/store/testing';
import { KeyInvalidationComponent } from './key-invalidation.component';

describe('KeyInvalidationComponent', () => {
  let component: KeyInvalidationComponent;
  let fixture: ComponentFixture<KeyInvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyInvalidationComponent],
      providers: [provideAnimationsAsync('noop'), provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyInvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
