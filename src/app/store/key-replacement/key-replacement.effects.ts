import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { KeyReplacementService } from "../../services/key-replacement.service";
import { KeyReplacementActions } from "../key-replacement";

@Injectable()
export class KeyReplacementEffects {
  keyReplacementService = inject(KeyReplacementService)
  actions$ = inject(Actions);

  invalidateKey$ = createEffect(() => { return this.actions$.pipe(
      ofType(KeyReplacementActions.invalidateKey),
      exhaustMap(() => this.keyReplacementService.invalidateDevice().pipe(
        map(() => KeyReplacementActions.invalidateKeySuccess()),
      )))
    }
  );
}
