import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupformComponent } from './signup/signupform/signupform.component';

export const ROUTES: Route[] = [
  { path: 'signup', component:  SignupformComponent }
];