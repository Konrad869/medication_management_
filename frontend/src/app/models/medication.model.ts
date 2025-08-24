export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  startDate: string;
  endDate?: string;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface MedicationHistory {
  id: string;
  medicationId: string;
  medicationName: string;
  action: 'taken' | 'missed' | 'skipped';
  timestamp: string;
  notes?: string;
}
