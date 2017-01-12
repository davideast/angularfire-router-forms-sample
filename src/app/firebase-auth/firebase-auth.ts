import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { FirebaseApp } from './firebase-auth.module';

@Injectable()
export class FirebaseAuth {

  public auth: firebase.auth.Auth;

  constructor(@Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth();
  }

  auth$(): Observable<firebase.User> {
    return Observable.create((observer: Observer<firebase.User>) => {
      this.auth.onAuthStateChanged(
        firebaseUser => observer.next(firebaseUser),
        error => observer.error(error),
        () => {})
    });
  }

}