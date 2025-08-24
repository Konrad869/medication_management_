import { Routes } from '@angular/router';
import { MedicationListComponent } from './components/medication-list/medication-list.component';
import { MedicationFormComponent } from './components/medication-form/medication-form.component';
import { HistoryComponent } from './components/history/history.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: MedicationListComponent },
  { path: 'add', component: MedicationFormComponent },
  { path: 'edit/:id', component: MedicationFormComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
