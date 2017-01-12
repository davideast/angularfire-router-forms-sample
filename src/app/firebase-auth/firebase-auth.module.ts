import { NgModule, OpaqueToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as firebase from 'firebase';
import { FirebaseAuth } from './'

export const FirebaseConfig = new OpaqueToken('AuthConfig');
export const FirebaseApp = new OpaqueToken('FirebaseApp');
export const FirebaseAppName = new OpaqueToken('FirebaseAppName');

export interface FirebaseAppConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  storageBucket?: string;
  messagingSenderId?: string;
}

export function _getFirebaseApp(config: FirebaseAppConfig, appName?: string): firebase.app.App {
  try {
    if (appName) {
      return firebase.initializeApp(config, appName);
    } else {
      return firebase.initializeApp(config);
    }
  }
  catch (e) {
    return firebase.app(null);
  }
}

export const COMMON_PROVIDERS: any[] = [
  {
    provide: FirebaseApp,
    useFactory: _getFirebaseApp,
    deps: [FirebaseConfig, FirebaseAppName]
  },
  FirebaseAuth
];

@NgModule({
  providers: [
    COMMON_PROVIDERS,
  ]
})
export class FirebaseAuthModule {
  static initializeApp(config: FirebaseAppConfig, appName?: string): ModuleWithProviders {
    return {
      ngModule: FirebaseAuthModule,
      providers: [
        { provide: FirebaseConfig, useValue: config },
        { provide: FirebaseAppName, useValue: appName },
        { provide: FirebaseApp, useFactory: _getFirebaseApp, deps: [FirebaseConfig, FirebaseAppName] }
      ]
    }
  }
}
