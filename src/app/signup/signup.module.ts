import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConfiguredAngularFireModule } from '../firebase';
import { PopoverModule } from '../popover/popover.module';
import { SignupRoutes } from './signup.routes';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    PopoverModule,
    ConfiguredAngularFireModule.configure(),
    SignupRoutes.routesForChild()
  ],
  declarations: [
    SignupformComponent
  ],
  providers: []
})
export class SignupModule { }
