import { Component, OnInit, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { KeyReplacementService } from '../../../../services/key-replacement.service';

@Component({
  selector: 'app-key-programming',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './key-programming.component.html',
})
export class KeyProgrammingComponent implements OnInit {
  keyReplacementService = inject(KeyReplacementService);
  isInvalidationCompleted = false;
  ngOnInit(): void {
    this.keyReplacementService.programDevice().subscribe(() => {
      this.isInvalidationCompleted = true;
      console.log('Programming Successful')
    });
  }
}
