import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public showSuccessMessage = false

  ngOnInit(): void {
  }

//this is just for displaying error messages

  enteredUserNameError = 'Please enter a user name in the correct form';
  enteredEmailError = 'Please enter a correctly formatted e-mail addresss ';
  enteredOrderError = 'Please enter an order of no more than 50 characters';
  enteredPasswordError = 'Please enter a password that contains lower case and upper case letters and at least one number';

  //constructor for the authorisation
  constructor(public authService: AuthService) {}
 onSignup(form: NgForm)
 {
  if (form.invalid) //checking if the entered info is valid
  {
  return;
 }
  this.authService.createUser(form.value.enteredEmail,
  form.value.enteredPassword, form.value.enteredUserName);//submitting data
  console.log(form.value);
  form.resetForm();
  this.showSuccessMessage = true

  }
}
