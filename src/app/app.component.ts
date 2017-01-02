import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


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

/**
 * The AppComponent is the root placeholder component. It is responsible
 * for listing what forms are available for navigation, but do it does not
 * actually contain each form. Each form demo is contained in it's own
 * module.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    /**
     * Creates the email and password form group
     */
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(event: FormSubmitEvent<SignUp>) {
    console.log(event);
  }

  determineClass(control: FormControl) {
    return {
      "app-form-input": control.valid === false,
      "app-form-input app-form-input-good": control.valid
    };
  }

}
