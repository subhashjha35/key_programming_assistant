import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-key-programming-assistant-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatButton],
  templateUrl: './key-programming-assistant-page.component.html',
  styleUrl: './key-programming-assistant-page.component.scss'
})
export class KeyProgrammingAssistantPageComponent {

}
