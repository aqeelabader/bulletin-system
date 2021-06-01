import { Component, OnInit, EventEmitter, Output, SecurityContext} from '@angular/core';
import {Bulletin} from '../bulletin.model';
import { NgForm } from '@angular/forms';
import { BulletinService } from '../bulletin.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-bulletin-create',
  templateUrl: './bulletin-create.component.html',
  styleUrls: ['./bulletin-create.component.css']
})
export class BulletinCreateComponent implements OnInit {



  ngOnInit(): void {
  }

//this is just for displaying error messages
  enteredUserNameError='Please enter a user name in the correct form';
  enteredEmailError='Please enter a correctly formatted e-mail addresss ';
  enteredBulletinError='Please enter an order of no more than 50 characters';
  //output: string; //had an error that didnt make sense

    //constructor for the service, route and starting the sanitizer
  constructor(public bulletinService: BulletinService, public route : ActivatedRoute, protected sanitizer: DomSanitizer){}

  onAddBulletin(Bulletinform: NgForm){
    if(Bulletinform.invalid){
      return;//checking if the entered info is valid
    }

    this.bulletinService.addBulletins(Bulletinform.value.enteredUserName,
      Bulletinform.value.enteredEmail, Bulletinform.value.enteredBulletin);//submitting data
     // this.output = (this.sanitizer.sanitize(SecurityContext.HTML, Bulletinform.value.enteredBulletin)); //this wasnt working for some reason
      Bulletinform.resetForm();// clears the form for user to make another bulletin post
  }




}
