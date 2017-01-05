import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PopoverModule } from '../popover/popover.module';
import { ConfiguredAngularFireModule } from '../firebase';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ConfiguredAngularFireModule,
    PopoverModule
  ],
  declarations: [
    SignupformComponent
  ]
})
export class SignupModule { }
