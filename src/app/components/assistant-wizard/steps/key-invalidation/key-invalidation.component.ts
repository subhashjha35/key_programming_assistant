import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { KeyReplacementService } from '../../../../services/key-replacement.service';
import { KeyReplacementActions, KeyReplacementReducers } from '../../../../store/key-replacement';
@Component({
  selector: 'app-key-invalidation',
  standalone: true,
  imports: [MatProgressBarModule, AsyncPipe],
  templateUrl: './key-invalidation.component.html',
})
export class KeyInvalidationComponent implements OnInit {
  keyReplacementService = inject(KeyReplacementService);
  store = inject(Store);

  isInvalidationInProgress$ = this.store.select(
    KeyReplacementReducers.selectIsInvalidateKeyInProgress,
  );

  ngOnInit(): void {
    this.store.dispatch(KeyReplacementActions.invalidateKey({ deviceId: 'device1' }));
  }
}
