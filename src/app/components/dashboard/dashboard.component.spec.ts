import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatCardModule , MatListModule, MatExpansionModule} from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [MatIconModule, MatCardModule, FormsModule,
         RouterModule, RouterTestingModule, MatExpansionModule, MatListModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display dashboard', () => {
    expect(fixture.nativeElement.querySelector('[data-test="dashboard"]')).toBeTruthy();
  });
});
