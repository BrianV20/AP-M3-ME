import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  loginClick = false;

  title = 'bootstrap-popup';
  loginForm!: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  loginFormSubmit(): void {
    console.log(this.loginForm.value);
    // Call Api
  }
  /* constructor() {
    loginClick = false;
  } */
  /* constructor() {

    var login: HTMLElement | null = document.getElementById('login');

    function Login(): any {
      // console.log("hola");
      // TODO
    }




    if (login != null) {
      login.onclick = Login();
    }
  } */
}