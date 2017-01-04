/* tslint:disable:no-unused-variable */
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp({
          apiKey: "AIzaSyBwPyYbfFhAe-C4o9yR0_Av7rOSJLKS0mw",
          authDomain: "af-router-forms.firebaseapp.com",
          databaseURL: "https://af-router-forms.firebaseio.com",
          storageBucket: "af-router-forms.appspot.com",
          messagingSenderId: "163141805580"
        }, {
          provider: AuthProviders.Password,
          method: AuthMethods.Password
        }),
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));

});
