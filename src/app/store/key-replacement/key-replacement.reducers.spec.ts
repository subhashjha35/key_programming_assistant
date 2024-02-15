import { Action } from '@ngrx/store';
import { KeyReplacementActions, KeyReplacementReducers } from '.';

describe('KeyReplacementReducers', () => {
  let state: KeyReplacementReducers.KeyReplacementState;

  beforeEach(() => {
    state = { ...KeyReplacementReducers.initialState };
  });

  it('should return the initial state', () => {
    const action = {} as Action;

    const result = KeyReplacementReducers.reducer(state, action);

    expect(result).toEqual(KeyReplacementReducers.initialState);
  });

  it('should set the wizardStatus to SELECT_DEVICE', () => {
    const action = KeyReplacementActions.initiateKeyReplacement();

    const result = KeyReplacementReducers.reducer(state, action);

    expect(result).toEqual({
      ...KeyReplacementReducers.initialState,
      wizardStatus: 'SELECT_DEVICE',
    });
  });

  it('should set the state on key invalidation', () => {
    const action = KeyReplacementActions.invalidateKey({ deviceId: 'd1' });

    const result = KeyReplacementReducers.reducer(state, action);

    expect(result).toEqual({
      ...KeyReplacementReducers.initialState,
      selectedDeviceId: 'd1',
      wizardStatus: 'KEY_INVALIDATION',
      invalidateKeyStatus: 'IN_PROGRESS',
    });
  });

  it('should set the state on key invalidation success', () => {
    const action = KeyReplacementActions.invalidateKeySuccess();

    const result = KeyReplacementReducers.reducer(state, action);

    expect(result).toEqual({
      ...KeyReplacementReducers.initialState,
      invalidateKeyStatus: 'FINISHED',
    });
  });

  it('should set the state on device programming', () => {
    const action = KeyReplacementActions.programDevice({ deviceId: 'd1' });

    const result = KeyReplacementReducers.reducer(state, action);

    expect(result).toEqual({
      ...KeyReplacementReducers.initialState,
      selectedDeviceId: 'd1',
      wizardStatus: 'PROGRAM_DEVICE',
      programDeviceStatus: 'IN_PROGRESS',
    });
  });

  it('should set the state on device programming', () => {
    const action = KeyReplacementActions.programDeviceSuccess();

    const result = KeyReplacementReducers.reducer(state, action);

    expect(result).toEqual({
      ...KeyReplacementReducers.initialState,
      programDeviceStatus: 'FINISHED',
    });
  });

  describe('KeyReplacementSelectors', () => {
    let initialState: KeyReplacementReducers.KeyReplacementState;
    beforeEach(() => {
      initialState = {
        selectedDeviceId: 'd1',
        wizardStatus: 'NO_WIZARD',
        invalidateKeyStatus: 'IN_PROGRESS',
        programDeviceStatus: 'NOT_STARTED',
      };
    });

    it('should select device id', () => {
      const result = KeyReplacementReducers.selectSelectedDeviceId.projector(initialState);

      expect(result).toEqual('d1');
    });

    it('should select if invalidate key is in progress', () => {
      const result = KeyReplacementReducers.selectIsInvalidateKeyInProgress.projector(initialState);

      expect(result).toEqual(true);
    });

    it('should select if programming device is in progress', () => {
      const result = KeyReplacementReducers.selectIsProgramDeviceInProgress.projector(initialState);

      expect(result).toEqual(false);
    });

    it('should select if key replacement is in progress', () => {
      expect(
        KeyReplacementReducers.selectKeyReplacementStatusLoading.projector(true, false)
      ).toEqual(true);
      expect(
        KeyReplacementReducers.selectKeyReplacementStatusLoading.projector(true, true)
      ).toEqual(true);
      expect(
        KeyReplacementReducers.selectKeyReplacementStatusLoading.projector(false, false)
      ).toEqual(false);
    });
  });
});
