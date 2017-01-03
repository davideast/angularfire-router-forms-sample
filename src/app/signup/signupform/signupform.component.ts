import { Component, OnInit, Directive, HostListener, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AngularFire, FIREBASE_PROVIDERS } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

const EMAIL_PATTERN = /.+@.+/;
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
/**
 * TODO: Move to own module
 */
export interface SignUp {
  email: string;
  password: string;
}

export interface FormSubmitEvent<T> {
  value: T;
  valid: boolean;
}

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private af: AngularFire) {}

  ngOnInit() {
    /**
     * Creates the email and password form group
     */
    this.signUpForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(EMAIL_PATTERN)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(PASSWORD_PATTERN)
      ]]
    });
  }

  onSubmit(event: FormSubmitEvent<SignUp>) {
    if(event.valid) {
      this.af.auth.createUser(event.value);
    }
  }

}

/**
 * Checks against users stored in the Firebase Database to see if the
 * email is available.
 *
 * /userEmails/email
 */
function emailExistsValidator(af: AngularFire) {
  return function emailExistsValidatorFn(control: FormControl) {
    return Observable.create((observer: Observer<boolean>) => {
      debugger;
      control.valueChanges
        .debounceTime(400)
        // Network requests only for valid emails
        .filter(value => {
          return EMAIL_PATTERN.test(value);
        })
        .switchMap(value => {
          return af.database.object(`userEmails/${value}`);
        })
        .subscribe((exists: boolean) => {
          observer.next(!!exists);
          observer.complete();
        });
    });
  }
}
