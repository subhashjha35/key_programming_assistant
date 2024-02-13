import { Component, OnInit, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { KeyReplacementService } from '../../../../services/key-replacement.service';
import { KeyReplacementActions } from '../../../../store';
@Component({
  selector: 'app-key-invalidation',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './key-invalidation.component.html',
})
export class KeyInvalidationComponent implements OnInit {
  keyReplacementService = inject(KeyReplacementService);
  store = inject(Store);

  isInvalidationCompleted = false;
  ngOnInit(): void {
    this.store.dispatch(KeyReplacementActions.invalidateKey({ deviceId: 'device1' }));
  }
}
