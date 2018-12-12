import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
    var config = {
      apiKey: "AIzaSyDpJaDpX8MPIOTXJg_oKMY4-0e0AvizW8c",
      authDomain: "dn-interactives.firebaseapp.com",
      databaseURL: "https://dn-interactives.firebaseio.com",
      projectId: "dn-interactives",
      storageBucket: "dn-interactives.appspot.com",
      messagingSenderId: "403753384515"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) this.router.navigate(['/login']);
    });
  }
}
