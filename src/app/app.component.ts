import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/filter';

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

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.af.auth.filter(auth => !!auth).subscribe(console.log);
  }


}
