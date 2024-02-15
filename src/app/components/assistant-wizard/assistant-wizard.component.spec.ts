import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { KeyReplacementService } from '../../services/key-replacement.service';
import { KeyReplacementReducers } from '../../store/key-replacement';
import { AssistantWizardComponent } from './assistant-wizard.component';

describe('AssistantWizardComponent', () => {
  let component: AssistantWizardComponent;
  let fixture: ComponentFixture<AssistantWizardComponent>;
  let store: MockStore;
  let dialogMock: jasmine.SpyObj<MatDialog>;
  let keyReplacementServiceMock: jasmine.SpyObj<KeyReplacementService>;
  let viewContainerRefMock: jasmine.SpyObj<ViewContainerRef>;

  beforeEach(async () => {
    dialogMock = jasmine.createSpyObj('MatDialog', ['closeAll']);
    keyReplacementServiceMock = jasmine.createSpyObj('KeyReplacementService', ['getDevices']);
    viewContainerRefMock = jasmine.createSpyObj('ViewContainerRef', ['createComponent', 'remove']);

    await TestBed.configureTestingModule({
      imports: [AssistantWizardComponent],
      providers: [
        provideAnimationsAsync('noop'),
        provideMockStore({ initialState: {}, selectors: [
          { selector: KeyReplacementReducers.selectKeyReplacementStatusLoading, value: false },
          { selector: KeyReplacementReducers.selectIsInvalidateKeyInProgress, value: false }
        ]}),
        { provide: MatDialog, useValue: dialogMock },
        { provide: KeyReplacementService, useValue: keyReplacementServiceMock },
        { provide: ViewContainerRef, useValue: viewContainerRefMock }
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(AssistantWizardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component variables on ngOnInit', () => {
    component.ngOnInit();
    expect(component.currentStep).toBe(0);
    expect(keyReplacementServiceMock.getDevices).toHaveBeenCalled();
  });

  it('should set device and dispatch action on setDevice', () => {
    const deviceId = 'deviceId';
    component.setDevice(deviceId);
    expect(store.dispatch).toHaveBeenCalledWith(jasmine.any(Object));
  });

});
