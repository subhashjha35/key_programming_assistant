import { createAction, props } from '@ngrx/store';

export const initiateKeyReplacement = createAction('[Key Replacement] initiate');
export const selectDevice = createAction('[Key Replacement] select device', props<{ deviceId: string }>());

export const invalidateKey = createAction('[Key Replacement] invalidate key', props<{ deviceId: string }>());
export const invalidateKeySuccess = createAction('[Key Replacement] invalidate key success');
export const invalidateKeyAbort = createAction('[Key Replacement] invalidate key abort');

