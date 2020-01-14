import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailGroupComponent } from './mail-group.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

describe('MailGroupComponent', () => {
  let component: MailGroupComponent;
  let fixture: ComponentFixture<MailGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailGroupComponent ],
      imports: [ MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display container for adding new mail group', () => {
    expect(fixture.nativeElement.querySelector('[data-test="existing-mail-group"]')).toBeTruthy();
  });
});
