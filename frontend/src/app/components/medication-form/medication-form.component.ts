import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MedicationService } from '../../services/medication.service';
import { Medication } from '../../models/medication.model';

@Component({
  selector: 'app-medication-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule
  ],
  template: `
    <div class="form-container">
      <h1>{{ isEditMode ? 'Edit' : 'Add' }} Medication</h1>
      
      <form [formGroup]="medicationForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <mat-form-field appearance="outline">
            <mat-label>Name</mat-label>
            <input matInput formControlName="name" placeholder="Enter medication name" required>
          </mat-form-field>
        </div>

        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Dosage</mat-label>
            <input matInput formControlName="dosage" placeholder="e.g., 10mg" required>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Frequency</mat-label>
            <mat-select formControlName="frequency" required>
              <mat-option *ngFor="let freq of frequencies" [value]="freq">{{freq}}</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Time</mat-label>
            <input matInput type="time" formControlName="time" required>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Start Date</mat-label>
            <input matInput [matDatepicker]="startDatePicker" formControlName="startDate">
            <mat-datepicker-toggle matSuffix [for]="startDatePicker"></mat-datepicker-toggle>
            <mat-datepicker #startDatePicker></mat-datepicker>
          </mat-form-field>
        </div>

        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>End Date (Optional)</mat-label>
            <input matInput [matDatepicker]="endDatePicker" formControlName="endDate">
            <mat-datepicker-toggle matSuffix [for]="endDatePicker"></mat-datepicker-toggle>
            <mat-datepicker #endDatePicker></mat-datepicker>
          </mat-form-field>

          <mat-form-field appearance="outline" class="notes-field">
            <mat-label>Notes (Optional)</mat-label>
            <textarea matInput formControlName="notes" placeholder="Any additional notes"></textarea>
          </mat-form-field>
        </div>

        <div class="button-group">
          <button mat-button type="button" routerLink="/">Cancel</button>
          <button mat-raised-button color="primary" type="submit" [disabled]="!medicationForm.valid">
            {{ isEditMode ? 'Update' : 'Save' }} Medication
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 500px;
      margin: 1rem auto;
      padding: 1rem 2rem 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
      color: #3f51b5;
      margin: 0.5rem 0 1.5rem 0;
      font-weight: 500;
      text-align: center;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-row {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .form-row mat-form-field {
      flex: 1;
    }
    
    mat-form-field {
      width: 100%;
    }
    
    .button-group {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid #eee;
    }
    
    .button-group button {
      min-width: 120px;
      margin: 0;
      padding: 0 16px;
      height: 36px;
      line-height: 36px;
    }
    
    @media (max-width: 600px) {
      .form-row {
        flex-direction: column;
        gap: 1rem;
      }
      
      .button-group {
        flex-direction: column;
      }
      
      .button-group button {
        width: 100%;
      }
    }
  `]
})
export class MedicationFormComponent implements OnInit {
  medicationForm: FormGroup;
  isEditMode = false;
  medicationId: string | null = null;
  frequencies = ['Once daily', 'Twice daily', 'Three times daily', 'Four times daily', 'As needed'];

  constructor(
    private fb: FormBuilder,
    private medicationService: MedicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.medicationForm = this.fb.group({
      name: ['', Validators.required],
      dosage: ['', Validators.required],
      frequency: ['', Validators.required],
      time: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [''],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.medicationId = this.route.snapshot.paramMap.get('id');
    
    if (this.medicationId) {
      this.isEditMode = true;
      this.loadMedication(this.medicationId);
    }
  }

  private loadMedication(id: string): void {
    this.medicationService.getMedications().subscribe(medications => {
      const medication = medications.find(m => m.id === id);
      if (medication) {
        this.medicationForm.patchValue({
          ...medication,
          startDate: new Date(medication.startDate),
          endDate: medication.endDate ? new Date(medication.endDate) : null
        });
      }
    });
  }

  onSubmit(): void {
    if (this.medicationForm.valid) {
      const formValue = {
        ...this.medicationForm.value,
        startDate: this.medicationForm.value.startDate.toISOString(),
        endDate: this.medicationForm.value.endDate ? this.medicationForm.value.endDate.toISOString() : null
      };

      if (this.isEditMode && this.medicationId) {
        this.medicationService.updateMedication(this.medicationId, formValue);
      } else {
        this.medicationService.addMedication(formValue);
      }
      
      this.router.navigate(['/']);
    }
  }
}
