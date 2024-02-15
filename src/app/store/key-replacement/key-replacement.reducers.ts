import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { KeyReplacementActions } from '.';
import { KeyReplacementWizardStatus } from '../../types/assistant';

export const keyReplacementFeatureKey = 'keyReplacement';

export interface KeyReplacementState {
  wizardStatus: KeyReplacementWizardStatus | null;
  selectedDeviceId: string | null;
  invalidateKeyStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED';
  programDeviceStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED';
}

export const initialState: KeyReplacementState = {
  selectedDeviceId: null,
  wizardStatus: 'NO_WIZARD',
  invalidateKeyStatus: 'NOT_STARTED',
  programDeviceStatus: 'NOT_STARTED',
};

const keyReplacementReducer = createReducer(
  initialState,
  on(
    KeyReplacementActions.initiateKeyReplacement,
    (state): KeyReplacementState => ({ ...state, wizardStatus: 'SELECT_DEVICE' }),
  ),
  on(
    KeyReplacementActions.selectDevice,
    (state, { deviceId }): KeyReplacementState => ({
      ...state,
      selectedDeviceId: deviceId,
    }),
  ),
  on(
    KeyReplacementActions.invalidateKey,
    (state, { deviceId }): KeyReplacementState => ({
      ...state,
      selectedDeviceId: deviceId,
      wizardStatus: 'KEY_INVALIDATION',
      invalidateKeyStatus: 'IN_PROGRESS',
    }),
  ),
  on(
    KeyReplacementActions.invalidateKeySuccess,
    (state): KeyReplacementState => ({
      ...state,
      invalidateKeyStatus: 'FINISHED',
    }),
  ),
  on(
    KeyReplacementActions.programDevice,
    (state, { deviceId }): KeyReplacementState => ({
      ...state,
      selectedDeviceId: deviceId,
      wizardStatus: 'PROGRAM_DEVICE',
      programDeviceStatus: 'IN_PROGRESS',
    }),
  ),
  on(
    KeyReplacementActions.programDeviceSuccess,
    (state): KeyReplacementState => ({
      ...state,
      programDeviceStatus: 'FINISHED',
    }),
  ),
);

export function reducer(state: KeyReplacementState | undefined, action: Action) {
  return keyReplacementReducer(state, action);
}
export const selectState = createFeatureSelector<KeyReplacementState>(keyReplacementFeatureKey);

export const selectSelectedDeviceId = createSelector(
  selectState,
  (state) => state.selectedDeviceId,
);

export const selectIsInvalidateKeyInProgress = createSelector(
  selectState,
  (state) => state.invalidateKeyStatus === 'IN_PROGRESS',
);
export const selectIsProgramDeviceInProgress = createSelector(
  selectState,
  (state) => state.programDeviceStatus === 'IN_PROGRESS',
);
export const selectKeyReplacementStatusLoading = createSelector(
  selectIsInvalidateKeyInProgress,
  selectIsProgramDeviceInProgress,
  (invalidate, program) => invalidate || program,
);
