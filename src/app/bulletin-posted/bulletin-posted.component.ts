import { Component, Input, InputDecorator} from '@angular/core';
import { Bulletin } from '../bulletin.model';
import { OnInit, OnDestroy } from '@angular/core';
import { BulletinService } from '../bulletin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bulletin-posted',
  templateUrl: './bulletin-posted.component.html',
  styleUrls: ['./bulletin-posted.component.css']
})
export class BulletinPostedComponent implements OnInit, OnDestroy{

bulletins : Bulletin[] =[] ;//from data model

constructor(public bulletinService: BulletinService){}//constructor for the service
private bulletinsSubscription: Subscription = new Subscription ;//this had a problem, but it appears to have fixed itself???

ngOnInit(){
this.bulletinService.getBulletins();//gets the bulletins
this.bulletinsSubscription = this.bulletinService.getPostUpdateListener()
.subscribe((bulletins: Bulletin[]) =>{
  this.bulletins = bulletins;
});
}


onDelete(bulletinID: string )
{
 this.bulletinService.deleteBulletin(bulletinID);//for deleting bulletins.....was working....dont know if it still works.
}

ngOnDestroy(){
  this.bulletinsSubscription.unsubscribe();
  }

}

