import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-assitant-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './assitant-card.component.html',
  styleUrl: './assitant-card.component.scss'
})
export class AssitantCardComponent {
  @Input() title = '';
  @Input() content = '';
}
