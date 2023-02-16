import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router: Router) { 
      /* submitBtn?.addEventListener("click", function() {
        router.navigateByUrl('/LoggedView');
      }, false); */
  }
  /* submitBtn = document.getElementById('submitBtn');
  loginFunction() {
    this.router.navigateByUrl('/LoggedView');
  } */

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.minLength(5)],)
    })
  }
  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  loginFormSubmit(): void {
    console.log(this.loginForm.value)
    console.log("llamada a loginFormSubmit");
    // Call Api
  }
}