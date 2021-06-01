import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }


  enteredUserNameError = 'Please enter a user name in the correct form';
  enteredEmailError = 'Please enter a correctly formatted e-mail addresss ';
  enteredOrderError = 'Please enter an order of no more than 50 characters';
  enteredPasswordError = 'Please enter a password that contains lower case and upper case letters and at least one number';

  constructor(public authService:AuthService) {}

  onLogin(form: NgForm)
  {
    if (form.invalid)
    {
      return;
    }
    this.authService.login(form.value.enteredEmail, form.value.enteredPassword, form.value.enteredUserName)
    console.log(form.value)

  }
}
