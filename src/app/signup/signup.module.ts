import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from '../popover/popover.module';
import { SignupRoutes } from './signup.routes';
import { FirebaseAuthModule } from '../firebase-auth'
import { APP_CONFIG } from '../firebase';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutes,
    FirebaseAuthModule.initializeApp(APP_CONFIG),
    PopoverModule
  ],
  declarations: [
    SignupformComponent
  ],
  providers: []
})
export class SignupModule { }
