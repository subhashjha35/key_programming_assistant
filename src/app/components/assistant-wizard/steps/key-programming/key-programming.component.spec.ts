import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideMockStore } from '@ngrx/store/testing';
import { KeyProgrammingComponent } from './key-programming.component';

describe('KeyProgrammingComponent', () => {
  let component: KeyProgrammingComponent;
  let fixture: ComponentFixture<KeyProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyProgrammingComponent],
      providers: [
        provideAnimationsAsync('noop'),
        provideMockStore({ initialState: {} }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
