import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [ Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.form.value.email, this.form.value.password)
    .subscribe((res) => {
      console.log('response', res);
      this.router.navigate(['/dashboard']);
    },
    error => {
      console.log('Error', error);
    });
  }

}
