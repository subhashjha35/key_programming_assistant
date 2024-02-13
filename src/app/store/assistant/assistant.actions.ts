import { createAction, props } from '@ngrx/store';
import { AssistantPageData } from '../../types/assistant';

export const fetchAssistantData = createAction('[Assistant] fetch data');
export const fetchAssistantDataSuccess = createAction(
  '[Assistant] fetch data success',
  props<{ data: AssistantPageData[] }>(),
);
