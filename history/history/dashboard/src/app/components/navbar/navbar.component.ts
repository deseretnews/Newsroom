import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  signedIn: boolean = false;

  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) this.signedIn = false;
      else this.signedIn = true;
    });
    router.events.subscribe(() => {
      if (firebase.auth().currentUser) this.signedIn = true;
      else this.signedIn = false;
    });
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

}
