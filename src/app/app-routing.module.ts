import { NgModule } from '@angular/core';
import { Routes, RouterModule} from'@angular/router';
import { BulletinCreateComponent } from './bulletin-create/bulletin-create.component';
import { BulletinPostedComponent } from './bulletin-posted/bulletin-posted.component';

const routes: Routes = [
  {path:'',component:BulletinPostedComponent},
  {path:'create',component:BulletinCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
