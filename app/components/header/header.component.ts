import { HtmlParser } from '@angular/compiler';
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
  submitBtn = document.getElementById('submitBtn');
  loginFunction() {
    // this.router.navigateByUrl('/LoggedView');

    // SHOW EDIT ICONS
    const icons = document.getElementsByClassName('editIcon');

    for(let i = 0; i < icons.length; i++) {
      const icon = icons[i] as HTMLElement;
      icon.style.display = 'flex';

      if(i % 2 == 0) {
        icon.style.color = '#212529';
      }
      else {
        icon.style.color = '#edf2f4';
      }
    }
      
      // FIX "DEFAULT" CSS
    var Needsfix = document.getElementById('containerUserH3');
    var fix = Needsfix as HTMLElement;
    fix.style.paddingTop = '2.3em';

    Needsfix = document.getElementById('expDiv');
    fix = Needsfix as HTMLElement;
    fix.style.paddingTop = '14em';
  }

  ngOnInit(): void {
    const editIcons = document.getElementsByClassName('editIcon');
    for (let i = 0; i < editIcons.length; i++) {
      const icon = editIcons[i] as HTMLElement;
      icon.style.display = 'none';
    }


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