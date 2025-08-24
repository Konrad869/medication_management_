import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Medication } from '../models/medication.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'http://localhost:3000';
  private medicationsSubject = new BehaviorSubject<Medication[]>([]);
  medications$ = this.medicationsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadMedications();
  }

  private loadMedications(): void {
    this.http.get<Medication[]>(`${this.apiUrl}/medications`).subscribe(medications => {
      this.medicationsSubject.next(medications);
    });
  }

  getMedications(): Observable<Medication[]> {
    return this.medications$;
  }

  addMedication(medication: Omit<Medication, 'id'>): void {
    this.http.post<Medication>(`${this.apiUrl}/medications`, medication).subscribe(() => {
      this.loadMedications();
    });
  }

  updateMedication(id: string, medication: Partial<Medication>): void {
    this.http.put<Medication>(`${this.apiUrl}/medications/${id}`, medication).subscribe(() => {
      this.loadMedications();
    });
  }

  deleteMedication(id: string): void {
    this.http.delete(`${this.apiUrl}/medications/${id}`).subscribe(() => {
      this.loadMedications();
    });
  }
}
