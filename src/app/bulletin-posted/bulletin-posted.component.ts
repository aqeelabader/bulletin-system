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

bulletin : Bulletin[] =[] ;

constructor(public bulletinService: BulletinService){}
private bulletinsSubscription: Subscription = new Subscription ;

ngOnInit(){
this.bulletinService.getBulletins();
this.bulletinsSubscription = this.bulletinService.getPostUpdateListener()
.subscribe((bulletin: Bulletin[]) =>{
  this.bulletin = bulletin;
});
}


onDelete(bulletinID: string )
{
 this.bulletinService.deleteBulletin(bulletinID);
}

ngOnDestroy(){
  this.bulletinsSubscription.unsubscribe();
  }

}

