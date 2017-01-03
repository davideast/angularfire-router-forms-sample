import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { PopoverDirective } from './popover/popover.directive';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavFooterComponent,
    PopoverDirective,
    PopoverComponent,
  ],
  entryComponents: [
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
