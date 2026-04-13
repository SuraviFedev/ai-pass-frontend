import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_ITEMS } from '../../core/constants/navigation';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly navItems = NAV_ITEMS;

  iconFor(label: string): string {
    switch (label) {
      case 'Workspace':
        return '⌂';
      case 'Automations':
        return '⚙';
      case 'AI Agents / Skills':
        return '◌';
      case 'AI Apps':
        return '✦';
      case 'Usage':
        return '▣';
      default:
        return '•';
    }
  }
}