import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideMockStore } from '@ngrx/store/testing';
import { DeviceSelectionComponent } from './device-selection.component';

describe('DeviceSelectionComponent', () => {
  let component: DeviceSelectionComponent;
  let fixture: ComponentFixture<DeviceSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceSelectionComponent],
      providers: [
        provideAnimationsAsync('noop'),
        provideMockStore({ initialState: {} }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
