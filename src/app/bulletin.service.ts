import { Bulletin } from './bulletin.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class BulletinService
{
  private bulletins: Bulletin [] = [];
  private updatedBulletins = new Subject<Bulletin[]>();

  constructor(private http: HttpClient){}

  getBulletins(){
    this.http.get<{message: string, bulletins:
    any}>('https://localhost:3000/api/bulletins')
    .pipe(map((bulletinData)=>{
      return bulletinData.bulletins.map((bulletin: { userName: any; emailAddress: any; bulletinDetails: any; _id: any; })=>{
        return{
          userName: bulletin.userName ,
          emailAddress: bulletin.emailAddress ,
          bulletinDetails: bulletin.bulletinDetails,
          id: bulletin._id
        };
      });
    }))
    .subscribe((changedBulletins)=>{
      this.bulletins = changedBulletins;
      this.updatedBulletins.next([...this.bulletins]);
    });

  }
  getPostUpdateListener(){
    return this.updatedBulletins.asObservable();
  }

  addBulletins(userName: string , emailAddress: string , bulletinDetails: string )
  {
    const bulletin: Bulletin = {id:'' , userName : userName , emailAddress : emailAddress , bulletinDetails : bulletinDetails};
    this.http.post<{message: string, bulletinId: string}
    >('https://localhost:3000/api/bulletins',bulletin)
    .subscribe((responseBulletinData)=>{
      console.log(responseBulletinData.message);
      const id = responseBulletinData.bulletinId;
      bulletin.id = id;
      this.bulletins.push(bulletin);
      this.updatedBulletins.next([...this.bulletins]);     //from vid

    });
  }

  deleteBulletin(bulletinID: string){
    this.http.delete('https://localhost:3000/api/bulletins/' + bulletinID)
    .subscribe(()=>
    {
      const updatedBulletinsDel = this.bulletins.filter(bulletin =>bulletin.id!==bulletinID);
      this.bulletins= updatedBulletinsDel;
      this.updatedBulletins.next([...this.bulletins]);
      console.log('bulletin deleted successfully');
    });
  }




}
