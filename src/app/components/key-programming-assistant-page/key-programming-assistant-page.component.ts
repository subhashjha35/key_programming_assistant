import { NgFor } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog
} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Subject, takeUntil } from 'rxjs';
import { AssistantHelper } from '../../helpers/assistant.helper';
import { AssistantWizardComponent } from '../assistant-wizard/assistant-wizard.component';
import { AssitantCardComponent } from '../assitant-card/assitant-card.component';

@Component({
  selector: 'app-key-programming-assistant-page',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, AssitantCardComponent, NgFor],
  templateUrl: './key-programming-assistant-page.component.html',
  styleUrl: './key-programming-assistant-page.component.scss'
})
export class KeyProgrammingAssistantPageComponent implements OnDestroy {

  dialog = inject(MatDialog)

  assistantFeatures = AssistantHelper.getAllAssistantFeatures();

  destroy$ = new Subject<void>();

  startAssistant(assistantId: string): void {
    console.log(assistantId);
    const dialogRef = this.dialog.open(AssistantWizardComponent, {
      data: { name: 'name' },
      width: '600px',
      minHeight: '500px',
      panelClass: 'dialogC'
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.onAssistantDismissed();
      });
  }

  onAssistantDismissed(): void {
    console.log('Assistant is dismissed')
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
