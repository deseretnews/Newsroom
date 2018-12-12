import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  host: {
    class: 'col-12'
  },
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.router.navigate(['/home']);
    });
    if (firebase.auth().currentUser) this.router.navigate(['/home']);
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      this.error = error.message;
    });
  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
      this.login();
    }).catch((error) => {
      this.error = error.message;
    });
  }

  ngOnInit() {
  }

}
