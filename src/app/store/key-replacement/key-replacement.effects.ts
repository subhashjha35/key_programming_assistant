import { Injectable, inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, takeUntil, tap } from 'rxjs';
import { KeyReplacementService } from '../../services/key-replacement.service';
import { KeyReplacementActions, KeyReplacementReducers } from '../key-replacement';

@Injectable()
export class KeyReplacementEffects {
  keyReplacementService = inject(KeyReplacementService);
  actions$ = inject(Actions);
  store = inject(Store);

  invalidateKey$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(KeyReplacementActions.invalidateKey),
        switchMap(() =>
          this.keyReplacementService
            .invalidateDevice()
            .pipe(map(() => KeyReplacementActions.invalidateKeySuccess()))
        ),
        takeUntil(this.actions$.pipe(ofType(KeyReplacementActions.invalidateKeyAbort)))
      );
    },
    { dispatch: true }
  );

  newDeviceName$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(KeyReplacementActions.setNewDeviceName),
        concatLatestFrom(() => this.store.select(KeyReplacementReducers.selectSelectedDeviceId)),
        tap(([action, deviceId]) =>
          this.keyReplacementService.setNewDeviceName({
            id: deviceId as string,
            name: action.deviceName,
          })
        )
      );
    },
    { dispatch: false }
  );

  programDevice$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(KeyReplacementActions.programDevice),
        switchMap(() =>
          this.keyReplacementService
            .invalidateDevice()
            .pipe(map(() => KeyReplacementActions.programDeviceSuccess()))
        )
      );
    },
    { dispatch: true }
  );
}
