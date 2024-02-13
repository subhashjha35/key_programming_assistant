import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog
} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AssistantActions, AssistantReducers } from '../../store/assistant';
import { AssistantWizardComponent } from '../assistant-wizard/assistant-wizard.component';
import { AssitantCardComponent } from '../assitant-card/assitant-card.component';

@Component({
  selector: 'app-key-programming-assistant-page',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, AssitantCardComponent, AsyncPipe],
  templateUrl: './key-programming-assistant-page.component.html',
  styleUrl: './key-programming-assistant-page.component.scss'
})
export class KeyProgrammingAssistantPageComponent implements OnInit, OnDestroy {
  store = inject(Store);
  dialog = inject(MatDialog)

  assistantFeatures$ = this.store.select(AssistantReducers.selectAssistantData);

  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.store.dispatch(AssistantActions.fetchAssistantData());
  }

  startAssistant(assistantId: string): void {
    console.log(assistantId);
    const dialogRef = this.dialog.open(AssistantWizardComponent, {
      data: { name: 'name' },
      width: '600px',
      minHeight: '500px',
      panelClass: 'dialogC',
      disableClose: true,
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
