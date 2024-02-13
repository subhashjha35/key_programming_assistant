import { createAction, props } from '@ngrx/store';

export const initiateKeyReplacement = createAction('[Key Replacement] initiate');
export const selectDevice = createAction('[Key Replacement] select device', props<{ deviceId: string }>());
export const setNewDeviceName = createAction('[Key Replacement] set new device name', props<{ deviceName: string }>());

export const invalidateKey = createAction('[Key Replacement] invalidate key', props<{ deviceId: string }>());
export const invalidateKeySuccess = createAction('[Key Replacement] invalidate key success');
export const invalidateKeyAbort = createAction('[Key Replacement] invalidate key abort');

export const programDevice = createAction('[Key Replacement] program device', props<{ deviceId: string }>());
export const programDeviceSuccess = createAction('[Key Replacement] program device success');
