import { Bulletin } from './bulletin.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({providedIn: 'root'})
export class BulletinService{
  private bulletins: Bulletin [] = [];
  private updatedBulletins = new Subject<Bulletin[]>();

  getBulletins(){
    return [...this.bulletins];


  }

  addBulletins(userName: string , emailAddress: string , bulletinDetails: string ){
    const bulletin: Bulletin = {userName : userName , emailAddress : emailAddress , bulletinDetails : bulletinDetails};
    this.bulletins.push(bulletin);
    this.updatedBulletins.next([...this.bulletins]); //from vid
  }


  getPostUpdateListener(){
    return this.updatedBulletins.asObservable();
  }


}
