import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, takeUntil } from "rxjs";
import { KeyReplacementService } from "../../services/key-replacement.service";
import { KeyReplacementActions } from "../key-replacement";

@Injectable()
export class KeyReplacementEffects {
  keyReplacementService = inject(KeyReplacementService)
  actions$ = inject(Actions);

  invalidateKey$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(KeyReplacementActions.invalidateKey),
        switchMap(() => this.keyReplacementService.invalidateDevice().pipe(
          map(() => KeyReplacementActions.invalidateKeySuccess()),
        )),
        takeUntil(this.actions$.pipe(ofType(KeyReplacementActions.invalidateKeyAbort)))
  )}, { dispatch: true })

  programDevice$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(KeyReplacementActions.programDevice),
        switchMap(() => this.keyReplacementService.invalidateDevice().pipe(
          map(() => KeyReplacementActions.programDeviceSuccess()),
        )),
  )}, { dispatch: true })
}
