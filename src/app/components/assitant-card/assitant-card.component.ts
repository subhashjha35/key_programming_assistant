import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-assitant-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTooltipModule],
  templateUrl: './assitant-card.component.html',
  styleUrl: './assitant-card.component.scss'
})
export class AssitantCardComponent {
  @Input() title = '';
  @Input() content = '';
  @Input() featureAvailable: boolean = true;

}
