import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Medication Manager</span>
      <span class="spacer"></span>
      <nav>
        <a mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          Me Medications
        </a>
        <a mat-button routerLink="/history" routerLinkActive="active">
          Medication istory
        </a>
        <a mat-button routerLink="/about" routerLinkActive="active">
          About Medication anager
        </a>
      </nav>
    </mat-toolbar>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    main {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .active {
      background-color: rgba(255, 255, 255, 0.1);
    }
    mat-toolbar {
      margin-bottom: 20px;
      padding: 0 16px;
    }
    
    mat-toolbar nav a {
      padding: 0 16px;
      height: 56px;
      line-height: 56px;
      margin: 4px 0;
    }
  `]
})
export class App {
  protected readonly title = signal('frontend');
}
