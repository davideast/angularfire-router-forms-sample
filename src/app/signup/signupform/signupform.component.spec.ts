/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { SignupformComponent } from './signupform.component';

describe('SignupformComponent', () => {
  let component: SignupformComponent;
  let fixture: ComponentFixture<SignupformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupformComponent ],
      imports: [
        ReactiveFormsModule,
        AngularFireModule.initializeApp({
          apiKey: "AIzaSyBwPyYbfFhAe-C4o9yR0_Av7rOSJLKS0mw",
          authDomain: "af-router-forms.firebaseapp.com",
          databaseURL: "https://af-router-forms.firebaseio.com",
          storageBucket: "af-router-forms.appspot.com",
          messagingSenderId: "163141805580"
        }, {
          provider: AuthProviders.Password,
          method: AuthMethods.Password
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
