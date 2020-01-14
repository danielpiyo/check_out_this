import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const authServiceStub: jasmine.SpyObj<AuthService> = jasmine.createSpyObj(
    'authService',
    ['login']
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [ {provide: authServiceStub, useValue: authServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load login form with email and password inputs', () => {
    const elements = fixture.nativeElement;

    expect(elements.querySelector('[data-test="login"]')).toBeTruthy();
    expect(elements.querySelector('form')).toBeTruthy();
    expect(elements.querySelector('button')).toBeTruthy();
    expect(elements.querySelector('#email')).toBeTruthy();
    expect(elements.querySelector('#password')).toBeTruthy();
  });
  it('should return model false if form is empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should validate email as required', () => {
    const email = component.form.controls.email;
    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeTruthy();
  });

  it('should validate password as required', () => {
    const password = component.form.controls.password;
    expect(password.valid).toBeFalsy();
    expect(password.errors.required).toBeTruthy();
  });

  it('should validate email format', () => {
    const email = component.form.controls.email;
    email.setValue('test');
    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeFalsy();
    expect(email.errors.pattern).toBeTruthy();
  });

  it('should validate email format correctly', () => {
    const email = component.form.controls.email;
    email.setValue('test@test.com');
    const errors = email.errors || {};

    expect(email.valid).toBeTruthy();
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeFalsy();
  });

  it('should render email validation message when formControl is submitted and invalid', () => {
    const elements: HTMLElement = fixture.nativeElement;
    expect(elements.querySelector('#email-error')).toBeFalsy();

    component.onSubmit();

    fixture.detectChanges();
    expect(elements.querySelector('#email-error')).toBeTruthy();
    expect(elements.querySelector('#email-error').textContent).toContain(
      'Please enter a valid email.'
    );
  });

  it('should render password validation message formcontrol is submited', () => {
    const elements: HTMLElement = fixture.nativeElement;
    expect(elements.querySelector('#password-error')).toBeFalsy();
    component.onSubmit();
    fixture.detectChanges();
    expect(elements.querySelector('#password-error')).toBeTruthy();
    expect(elements.querySelector('#password-error').textContent).toContain('Please enter a valid password');
  });

  // it('should invoke when the form values are right', () => {
  //   const email = component.form.controls.email;
  //   email.setValue('test@gmail.com');
  //   const password = component.form.controls.password;
  //   password.setValue('123456');
  //   authServiceStub.login.and.returnValue(of());
  //   fixture.nativeElement.querySelector('button').click();
  //   expect(authServiceStub.login.calls.any()).toBeTruthy();
  //   expect(authServiceStub.login).toHaveBeenCalledWith(email.value, password.value);

  // });
});
