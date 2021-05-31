import { NgModule } from '@angular/core';
import { Routes, RouterModule} from'@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { BulletinCreateComponent } from './bulletin-create/bulletin-create.component';
import { BulletinPostedComponent } from './bulletin-posted/bulletin-posted.component';

const routes: Routes = [
  {path:'',component:BulletinPostedComponent},
  {path:'create',component:BulletinCreateComponent},
  {path:'edit/:poistId', component:BulletinCreateComponent},
  {path:'login',component:LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
