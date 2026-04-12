import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [StatusBadgeComponent],
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss'],
})
export class AppCardComponent {
  @Input() id = '';
  @Input() name = '';
  @Input() description = '';
  @Input() category = '';
  @Input() status: 'Live' | 'Coming Soon' = 'Live';
  @Input() actionLabel: 'Open' | 'Analyze' = 'Open';

  @Output() actionClick = new EventEmitter<void>();

  onActionClick(): void {
    this.actionClick.emit();
  }
}