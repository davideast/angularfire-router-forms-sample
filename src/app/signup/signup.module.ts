import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from '../popover/popover.module';
import { SignupRoutes } from './signup.routes';
import { ConfiguredAngularFireModule } from '../firebase';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutes,
    ConfiguredAngularFireModule,
    PopoverModule
  ],
  declarations: [
    SignupformComponent
  ],
  providers: []
})
export class SignupModule { }
