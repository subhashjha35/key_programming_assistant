import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { AssistantActions } from ".";
import { AssistantService } from "../../services/assistant.service";
import { AssistantPageData } from "../../types/assistant";

@Injectable()
export class AssistantEffects {
  assistantService = inject(AssistantService)
  actions$ = inject(Actions);

  fetchAssistantData$ = createEffect(() => { return this.actions$.pipe(
      ofType(AssistantActions.fetchAssistantData),
      switchMap(() => this.assistantService.fetchAllAssistantData().pipe(
        map((data: AssistantPageData[] ) => AssistantActions.fetchAssistantDataSuccess({ data })),
      )))
    }
  );
}
