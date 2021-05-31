import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  enteredUserNameError = 'Please enter a user name in the correct form';
  enteredEmailError = 'Please enter a correctly formatted e-mail addresss ';
  enteredOrderError = 'Please enter an order of no more than 50 characters';
  enteredPasswordError = 'Please enter a password that contains lower case and upper case letters and at least one number';

  isLoading = 'false';

  onSignup(form: NgForm){

    console.log(form.value);



  }
}
