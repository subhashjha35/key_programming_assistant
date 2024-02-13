import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { KeyReplacementActions } from '../../../../store/key-replacement';
@Component({
  selector: 'app-key-duplication',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './key-duplication.component.html',
})
export class KeyDuplicationComponent {
  store = inject(Store);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange(event: { target: any }) {
    this.store.dispatch(KeyReplacementActions.setNewDeviceName({ deviceName: event.target.value }))
  }
}
