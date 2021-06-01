import { NgModule } from '@angular/core';
import { Routes, RouterModule} from'@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { BulletinCreateComponent } from './bulletin-create/bulletin-create.component';
import { BulletinPostedComponent } from './bulletin-posted/bulletin-posted.component';
import { WelcomeComponent } from './welcome/welcome.component';

//the routing of everything is set below
const routes: Routes = [
  {path:'', component:WelcomeComponent},//this welcome page is set as the default page cause it contains info on where to go
  {path:'list',component:BulletinPostedComponent},
  {path:'create',component:BulletinCreateComponent},
  {path:'edit/:postId', component:BulletinCreateComponent},//seems a bit pointless given the edit button on the posts but ill leave it here anyway
  {path:'login',component:LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
