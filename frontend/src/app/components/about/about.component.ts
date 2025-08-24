import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="about-container">
      <mat-card class="about-card">
        <h1>About Medication Manager</h1>
        <p>
          Medication Manager is a simple and intuitive application designed to help you keep track of your medications,
          set reminders, and maintain a history of your medication intake.
        </p>
        
        <h2>Features</h2>
        <ul>
          <li>Track all your medications in one place</li>
          <li>Set up medication schedules and reminders</li>
          <li>View your medication history</li>
          <li>Get notifications for upcoming doses</li>
          <li>Simple and intuitive interface</li>
        </ul>

        <h2>How to Use</h2>
        <ol>
          <li>Add your medications with their details</li>
          <li>Set the dosage and schedule</li>
          <li>Get reminders when it's time to take your medication</li>
          <li>Mark medications as taken and add any notes</li>
        </ol>

        <div class="version">
          <p>Version 1.0.0</p>
          <p>© 2025 Medication Manager. All rights reserved.</p>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .about-card {
      padding: 20px;
    }
    h1 {
      color: #3f51b5;
      margin-bottom: 20px;
    }
    h2 {
      color: #3f51b5;
      margin: 20px 0 10px 0;
    }
    ul, ol {
      padding-left: 20px;
    }
    li {
      margin-bottom: 8px;
    }
    .version {
      margin-top: 30px;
      padding-top: 15px;
      border-top: 1px solid #eee;
      color: #666;
      font-size: 0.9em;
    }
  `]
})
export class AboutComponent { }
