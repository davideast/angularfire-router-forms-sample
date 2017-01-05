import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { NgModule } from '@angular/core';

export const APP_CONFIG = {
  apiKey: "AIzaSyBwPyYbfFhAe-C4o9yR0_Av7rOSJLKS0mw",
  authDomain: "af-router-forms.firebaseapp.com",
  databaseURL: "https://af-router-forms.firebaseio.com",
  storageBucket: "af-router-forms.appspot.com",
  messagingSenderId: "163141805580"
};

export const AUTH_CONFIG = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBwPyYbfFhAe-C4o9yR0_Av7rOSJLKS0mw",
      authDomain: "af-router-forms.firebaseapp.com",
      databaseURL: "https://af-router-forms.firebaseio.com",
      storageBucket: "af-router-forms.appspot.com",
      messagingSenderId: "163141805580"
    }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }),
  ],
  exports: [
    AngularFireModule
  ]
})
export class ConfiguredAngularFireModule { }