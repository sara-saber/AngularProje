import { AdminComponent } from './Modules/admin/admin.component';
import { HomeComponent } from './Modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/login/login.component';
import { SignupComponent } from './Modules/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
    data:{title:'Login'},
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'admin',
    data:{title:'admin',titlepage:'admin'},
    component:AdminComponent,
    canActivate:[AuthGuard],
    loadChildren:()=>
    import('./Modules/admin/admin.module').then(m=>m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
