import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AssistantActions } from '.';
import { AssistantPageData } from '../../types/assistant';

export const AssistantFeatureKey = 'assistant';

export interface AssistantState {
  data: AssistantPageData[];
  isLoading: boolean;
}

const initialState: AssistantState = {
  data: [],
  isLoading: false,
};

const assistantReducer = createReducer(
  initialState,
  on(
    AssistantActions.fetchAssistantData,
    (): AssistantState => ({ ...initialState, isLoading: true }),
  ),
  on(
    AssistantActions.fetchAssistantDataSuccess,
    (state, { data }): AssistantState => ({ ...state, data, isLoading: false }),
  ),
);

export function reducer(state: AssistantState | undefined, action: Action) {
  return assistantReducer(state, action);
}

export const selectState = createFeatureSelector<AssistantState>(AssistantFeatureKey);

export const selectAssistantData = createSelector(selectState, (state) => state.data);

export const selectIsAssistantDataLoading = createSelector(selectState, (state) => state.isLoading);
