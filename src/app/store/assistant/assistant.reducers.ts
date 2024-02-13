import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AssistantActions } from ".";
import { AssistantPageData } from "../../types/assistant";

export const AssistantFeatureKey = 'assistant';

export interface AssistantState {
  data: AssistantPageData[]
}

const initialState: AssistantState = {
  data: [],
}

const assistantReducer = createReducer(
  initialState,
  on(AssistantActions.fetchAssistantDataSuccess, (state, { data }): AssistantState => ({ ...state, data })),
);

export function reducer(state: AssistantState | undefined, action: Action) {
  return assistantReducer(state, action);
}

export const selectState = createFeatureSelector<AssistantState>(AssistantFeatureKey)

export const selectAssistantData = createSelector(selectState, (state) => state.data);
