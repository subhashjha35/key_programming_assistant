import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, firstValueFrom, of } from 'rxjs';
import { KeyReplacementActions, KeyReplacementReducers } from '.';
import { KeyReplacementService } from '../../services/key-replacement.service';
import { KeyReplacementEffects } from './key-replacement.effects';

describe('KeyReplacementEffects', () => {
  let serviceSpy: jasmine.SpyObj<KeyReplacementService>;

  let actions$: Observable<any>;
  let effects: KeyReplacementEffects;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj<KeyReplacementService>([
      'getDevices',
      'setNewDeviceName',
      'invalidateDevice',
      'programDevice',
    ]);

    TestBed.configureTestingModule({
      providers: [
        KeyReplacementEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          selectors: [{ selector: KeyReplacementReducers.selectSelectedDeviceId, value: 'd1' }],
        }),
        { provide: KeyReplacementService, useValue: serviceSpy },
      ],
    });
    effects = TestBed.inject(KeyReplacementEffects);
  });

  it('should invalidate the key', async () => {
    actions$ = of(KeyReplacementActions.invalidateKey({ deviceId: 'd1' }));

    serviceSpy.invalidateDevice.and.returnValue(of(true));
    const action = await firstValueFrom(effects.invalidateKey$);

    expect(action).toEqual(KeyReplacementActions.invalidateKeySuccess());
    expect(serviceSpy.invalidateDevice).toHaveBeenCalled();
  });

  it('should set the new device name', async () => {
    actions$ = of(KeyReplacementActions.setNewDeviceName({ deviceName: 'dev1' }));

    serviceSpy.setNewDeviceName.and.callThrough();
    await firstValueFrom(effects.newDeviceName$);

    expect(serviceSpy.setNewDeviceName).toHaveBeenCalledWith({ id: 'd1', name: 'dev1' });
  });

  it('should program the new device', async () => {
    actions$ = of(KeyReplacementActions.programDevice({ deviceId: 'd1' }));

    serviceSpy.programDevice.and.returnValue(of(true));
    const action = await firstValueFrom(effects.programDevice$);

    expect(action).toEqual(KeyReplacementActions.programDeviceSuccess());
    expect(serviceSpy.programDevice).toHaveBeenCalled();
  });
});
