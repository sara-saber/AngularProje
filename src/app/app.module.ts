
import { AdminModule } from './Modules/admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Modules/menu/menu.component';
import { HomeComponent } from './Modules/home/home.component';
import { SharedModule } from './Modules/shared/shared.module';
import { LoginComponent } from './Modules/login/login.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { SignupComponent } from './Modules/signup/signup.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    NgbModule, 
    NgbAlertModule,
  ],
  providers: [
   // {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
   // {provide:HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
