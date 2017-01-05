import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupModule } from './signup/signup.module';
import { ConfiguredAngularFireModule } from './firebase';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavFooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutes,
    ConfiguredAngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
