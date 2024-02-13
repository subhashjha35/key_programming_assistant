import { Action, createReducer, on } from "@ngrx/store";
import { KeyReplacementActions } from ".";

export type KeyReplacementWizardStatus = 'NO_WIZARD' | 'SELECT_DEVICE' | 'KEY_INVALIDATION' | 'PROGRAM_DEVICE' | 'DEVICE_READY';

export const keyReplacementFeatureKey = 'keyReplacement';

export interface KeyReplacementState {
  wizardStatus: KeyReplacementWizardStatus | null,
  selectedDeviceId: string | null;
}

const initialState: KeyReplacementState = {
  selectedDeviceId: null,
  wizardStatus: 'NO_WIZARD'
}

const keyReplacementReducer = createReducer(
  initialState,
  on(KeyReplacementActions.initiateKeyReplacement, (state): KeyReplacementState => ({ ...state, wizardStatus: 'SELECT_DEVICE' })),
  on(KeyReplacementActions.selectDevice, (state, { deviceId }): KeyReplacementState => ({
    ...state,
    selectedDeviceId: deviceId,
  })),
);

export function reducer(state: KeyReplacementState | undefined, action: Action) {
  return keyReplacementReducer(state, action);
}
