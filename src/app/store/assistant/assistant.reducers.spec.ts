import { Action } from '@ngrx/store';
import { AssistantActions, AssistantReducers } from '.';
import { AssistantPageData } from '../../types/assistant';

const mockAssistantData: AssistantPageData[] = [
  { id: 'keyReplacementAssistant', content: '', isAvailable: true, name: 'keyReplacement' }
];

describe('AssistantReducers', () => {
  let initialState: AssistantReducers.AssistantState;

  beforeEach(() => {
    initialState = {
      ...AssistantReducers.initialState,
      data: mockAssistantData,
     };
  });

  it('should return the initial state', () => {
    const action = {} as Action;

    const result = AssistantReducers.reducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('should set loading to true on fetching assistant data', () => {
    const action = AssistantActions.fetchAssistantData();

    const result = AssistantReducers.reducer(initialState, action);

    expect(result).toEqual({
      ...AssistantReducers.initialState,
      isLoading: true,
    });
  });

  it('should fetch and set assistant page data', () => {
    const action = AssistantActions.fetchAssistantDataSuccess({ data: mockAssistantData });

    const result = AssistantReducers.reducer(initialState, action);

    expect(result).toEqual({
      ...AssistantReducers.initialState,
      data: mockAssistantData,
    });
  });


  describe('AssistantSelectors', () => {
    it('should select device id', () => {
      const result = AssistantReducers.selectAssistantData.projector(initialState);

      expect(result).toEqual(mockAssistantData);
    });

    it('should select if invalidate key is in progress', () => {
      expect(AssistantReducers.selectIsAssistantDataLoading.projector(initialState)).toEqual(false);
      expect(AssistantReducers.selectIsAssistantDataLoading.projector({...initialState, isLoading: true })).toEqual(true);
    });
  });
});
