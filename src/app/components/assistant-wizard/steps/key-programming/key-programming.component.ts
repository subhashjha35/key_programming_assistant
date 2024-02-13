import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { KeyReplacementService } from '../../../../services/key-replacement.service';
import { KeyReplacementActions, KeyReplacementReducers } from '../../../../store/key-replacement';

@Component({
  selector: 'app-key-programming',
  standalone: true,
  imports: [MatProgressBarModule, AsyncPipe],
  templateUrl: './key-programming.component.html',
})
export class KeyProgrammingComponent implements OnInit {
  keyReplacementService = inject(KeyReplacementService);
  store = inject(Store);

  isProgrammingInProgress$ = this.store.select(
    KeyReplacementReducers.selectIsProgramDeviceInProgress,
  );

  ngOnInit(): void {
    this.store.dispatch(KeyReplacementActions.programDevice({ deviceId: 'device1' }));
  }
}
