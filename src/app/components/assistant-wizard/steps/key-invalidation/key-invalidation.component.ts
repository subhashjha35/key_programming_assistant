import { Component, OnInit, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { KeyReplacementService } from '../../../../services/key-replacement.service';
@Component({
  selector: 'app-key-invalidation',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './key-invalidation.component.html',
})
export class KeyInvalidationComponent implements OnInit {
  keyReplacementService = inject(KeyReplacementService);
  isInvalidationCompleted = false;
  ngOnInit(): void {
    this.keyReplacementService.invalidateDevice().subscribe(() => {
      this.isInvalidationCompleted = true;
      console.log('Invalidated Successful')
    });
  }
}
