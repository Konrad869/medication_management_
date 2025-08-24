import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MedicationService } from '../../services/medication.service';
import { Medication } from '../../models/medication.model';

@Component({
  selector: 'app-medication-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <div class="container">
      <div class="header">
        <h1>My Medications</h1>
        <button mat-raised-button color="primary" [routerLink]="['/add']" class="add-button">
          Add Medication
        </button>
      </div>

      <div class="medication-grid">
        <mat-card *ngFor="let med of medications" class="medication-card">
          <mat-card-header>
            <mat-card-title>{{ med.name }}</mat-card-title>
            <mat-card-subtitle>{{ med.dosage }} • {{ med.frequency }} at {{ med.time }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-actions align="end">
            <button mat-icon-button [routerLink]="['/edit', med.id]">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" (click)="deleteMedication(med.id)">
              <mat-icon>delete</mat-icon>
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding: 0 10px;
    }
    .medication-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
      padding: 0 10px;
    }
    .medication-card {
      margin: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .medication-card mat-card-header {
      padding: 16px 16px 0;
    }
    .medication-card mat-card-content {
      padding: 0 16px;
      flex-grow: 1;
    }
    .medication-card mat-card-actions {
      padding: 12px 12px 12px 0;
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
    }
    
    .medication-card mat-icon {
      font-size: 28px;
      width: 28px;
      height: 28px;
      line-height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .medication-card button[mat-icon-button] {
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      transition: background-color 0.2s;
      margin: 0;
      padding: 0;
      vertical-align: middle;
    }
    
    .medication-card button[mat-icon-button]:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    .medication-card mat-card-title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    .medication-card mat-card-subtitle {
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .add-button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class MedicationListComponent implements OnInit {
  medications: Medication[] = [];

  constructor(private medicationService: MedicationService) {}

  ngOnInit(): void {
    this.medicationService.getMedications().subscribe(meds => {
      this.medications = meds;
    });
  }

  deleteMedication(id: string): void {
    if (confirm('Are you sure you want to delete this medication?')) {
      this.medicationService.deleteMedication(id);
    }
  }
}
