import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MedicationService } from '../../services/medication.service';
import { MedicationHistory } from '../../models/medication.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule],
  template: `
    <div class="history-container">
      <h1>Medication History</h1>
      
      <mat-card *ngIf="history.length === 0" class="empty-state">
        <p>No history available. Your medication intake history will appear here.</p>
      </mat-card>

      <mat-list *ngIf="history.length > 0">
        <mat-list-item *ngFor="let entry of history" class="history-item">
          <mat-icon matListItemIcon class="history-icon" [class.taken]="entry.action === 'taken'">
            {{ getActionIcon(entry.action) }}
          </mat-icon>
          <div matListItemTitle>{{ entry.medicationName }}</div>
          <div matListItemLine>{{ entry.timestamp | date:'medium' }}</div>
          <div matListItemMeta *ngIf="entry.notes">{{ entry.notes }}</div>
        </mat-list-item>
      </mat-list>
    </div>
  `,
  styles: [`
    .history-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .empty-state {
      padding: 20px;
      text-align: center;
      margin-top: 20px;
    }
    .history-item {
      border-bottom: 1px solid #eee;
    }
    .history-icon {
      margin-right: 16px;
      color: #757575;
    }
    .taken {
      color: #4caf50;
    }
  `]
})
export class HistoryComponent implements OnInit {
  history: MedicationHistory[] = [];

  constructor(private medicationService: MedicationService) {}

  ngOnInit(): void {
   
    this.history = [
      {
        id: '1',
        medicationId: '1',
        medicationName: 'Ibuprofen',
        action: 'taken',
        timestamp: new Date().toISOString(),
        notes: 'With food'
      },
      {
        id: '2',
        medicationId: '2',
        medicationName: 'Vitamin D',
        action: 'taken',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        notes: 'Morning dose'
      }
    ];
  }

  getActionIcon(action: string): string {
    switch (action) {
      case 'taken': return 'check_circle';
      case 'missed': return 'cancel';
      case 'skipped': return 'block';
      default: return 'help';
    }
  }
}
