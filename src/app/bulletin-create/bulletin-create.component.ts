import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Bulletin} from '../bulletin.model';
import { NgForm } from '@angular/forms';
import { BulletinService } from '../bulletin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bulletin-create',
  templateUrl: './bulletin-create.component.html',
  styleUrls: ['./bulletin-create.component.css']
})
export class BulletinCreateComponent implements OnInit {



  ngOnInit(): void {
  }

  enteredUserNameError='Please enter a user name in the correct form';
  enteredEmailError='Please enter a correctly formatted e-mail addresss ';
  enteredBulletinError='Please enter an order of no more than 50 characters';


  constructor(public bulletinService: BulletinService, public route : ActivatedRoute){}

  onAddBulletin(Bulletinform: NgForm){
    if(Bulletinform.invalid){
      return;
    }

    this.bulletinService.addBulletins(Bulletinform.value.enteredUserName,
      Bulletinform.value.enteredEmail, Bulletinform.value.enteredBulletin);

      Bulletinform.resetForm();
  }




}
