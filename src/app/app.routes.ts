import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Route[] = [
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' }
];

/**
 * Helper function that configures routes for the top-level AppModule.
 * Since AppModule is top-level, it will use .forRoot() to configure the
 * routes. 'loadChildren' is used to lazy load modules per route.
 */
export const AppRoutes = RouterModule.forRoot(APP_ROUTES);