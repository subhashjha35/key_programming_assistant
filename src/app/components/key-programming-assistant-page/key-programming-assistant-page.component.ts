import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AssistantHelper } from '../../helpers/assistant.helper';
import { AssitantCardComponent } from '../assitant-card/assitant-card.component';

@Component({
  selector: 'app-key-programming-assistant-page',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, AssitantCardComponent, NgFor],
  templateUrl: './key-programming-assistant-page.component.html',
  styleUrl: './key-programming-assistant-page.component.scss'
})
export class KeyProgrammingAssistantPageComponent {
  assistantFeatures = AssistantHelper.getAllAssistantFeatures();

  startAssistant(assistantId: string): void {
    console.log(assistantId);
  }
}
