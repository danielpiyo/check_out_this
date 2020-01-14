import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatBadgeModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ MatCardModule, MatIconModule, FlexLayoutModule, MatBadgeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show home content', () => {
    expect(fixture.nativeElement.querySelector('[data-test="home"]')).toBeTruthy();
  });
});
