import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBwPyYbfFhAe-C4o9yR0_Av7rOSJLKS0mw",
      authDomain: "af-router-forms.firebaseapp.com",
      databaseURL: "https://af-router-forms.firebaseio.com",
      storageBucket: "af-router-forms.appspot.com",
      messagingSenderId: "163141805580"
    }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
  ],
  declarations: [
    SignupformComponent
  ]
})
export class SignupModule { }
