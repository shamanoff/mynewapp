import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth-guard.service';
import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyAujuc_ouG7a9dBg6bUPmt4toJ_7Tsh2Zw',
  authDomain: 'authauth-99563.firebaseapp.com',
  databaseURL: 'https://authauth-99563.firebaseio.com',
  projectId: 'authauth-99563',
  storageBucket: 'authauth-99563.appspot.com',
  messagingSenderId: '33276517004'
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
