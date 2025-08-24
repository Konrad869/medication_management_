import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

// Type declarations for Jasmine
declare var describe: any;
declare var it: any;
declare var expect: any;
declare var beforeEach: any;
declare var spyOn: any;

// Mock component for router-outlet
@Component({
  selector: 'router-outlet',
  template: '',
  standalone: true
})
class MockRouterOutlet {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule.withRoutes([
          { path: '', component: AppComponent }
        ])
      ]
    })
    .overrideComponent(AppComponent, {
      add: {
        imports: [RouterOutlet]
      }
    })
    .compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    
    // Prevent navigation during tests
    spyOn(router, 'navigate').and.callFake(() => Promise.resolve(true));
    spyOn(router, 'navigateByUrl').and.callFake(() => Promise.resolve(true));
    
    // Create component after all spies are set up
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    
    // Initial change detection
    fixture.detectChanges();
    
    // Wait for any initial navigation to complete
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(component.title).toBe('frontend');
  });

  it('should render the router outlet', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
