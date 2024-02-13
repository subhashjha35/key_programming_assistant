import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import { KeyReplacementService } from '../../../../services/key-replacement.service';
import { KeyReplacementReducers } from '../../../../store/key-replacement';

@Component({
  selector: 'app-key-result',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './key-result.component.html',
})
export class KeyResultComponent implements OnInit {
  store = inject(Store);
  keyReplacementService = inject(KeyReplacementService);
  deviceName$: Observable<string> = of('');

  ngOnInit(): void {
    this.deviceName$ = this.store.select(KeyReplacementReducers.selectSelectedDeviceId)
      .pipe(
        map(
          (id) => this.keyReplacementService
            .getDevices()
            .find(d => d.id === id)
        ),
        map((dev) => dev!.name)
      )
  }

}
