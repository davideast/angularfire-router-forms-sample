import { RouterModule, Routes } from '@angular/router';
import { SignupformComponent } from './signupform/signupform.component';

export const SIGNUP_ROUTES: Routes = [
  { path: '', component: SignupformComponent }
];

/**
 * Helper function to configure the RouterModule specifically for the
 * SignupModule. SignupModule is a "feature" module, which means it will
 * likely be a child module. Child modules need to use .forChild() with
 * the RouterModule to not cause chaos with modifying window.location.
 */
export const SignupRoutes = RouterModule.forChild(SIGNUP_ROUTES)