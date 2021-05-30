import { Bulletin } from './bulletin.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class BulletinService{
  private bulletins: Bulletin [] = [];
  private updatedBulletins = new Subject<Bulletin[]>();

  constructor(private http: HttpClient){}
  getBulletins(){
    this.http.get<{message: string, bulletinsData: Bulletin[]}>('https://localhost:3000/api/bulletins')
    .pipe(map((bulletin)=>{
      return bulletin.bulletinsData.map(bulletins=>{
        return{
          id: bulletins.id ,
          userName: bulletins.userName ,
          emailAddress: bulletins.emailAddress ,
          bulletinDetails: bulletins.bulletinDetails
        };
      });
    })).subscribe((bulletinsData)=>{
      this.bulletins = bulletinsData;
      this.updatedBulletins.next([...this.bulletins]);
    });

  }

  addBulletins(userName: string , emailAddress: string , bulletinDetails: string )
  {
    const bulletin: Bulletin = {id:'' , userName : userName , emailAddress : emailAddress , bulletinDetails : bulletinDetails};
    this.http.post<{message: String} >('https://localhost:3000/api/bulletins',bulletin)
    .subscribe((responseBulletinData)=>{
      console.log(responseBulletinData.message);
      this.bulletins.push(bulletin);
      this.updatedBulletins.next([...this.bulletins]);     //from vid

    });
  }


  getPostUpdateListener(){
    return this.updatedBulletins.asObservable();
  }


}
