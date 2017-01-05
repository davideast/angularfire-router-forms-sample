import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConfiguredAngularFireModule } from '../firebase';
import { PopoverModule } from '../popover/popover.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ConfiguredAngularFireModule.configure(),
    PopoverModule
  ],
  declarations: [
    SignupformComponent
  ]
})
export class SignupModule { }
