import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-venues',
  host: {
    class: 'col-12'
  },
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent implements OnInit {

  venue = {
    name: '',
    image: '',
    location: '',
    capacity: '',
    parking: '',
    security: '',
    phone: '',
    website: '',
    food: '',
    notes: ''
  }

  editor = {
    id: null,
    success: '',
    error: '',
    warning: ''
  }

  venues = [];

  constructor(private _sanitizer: DomSanitizer) {
    firebase.database().ref('/venues').on('value', (snapshot) => {
      this.venues = snapshot.val();
    });
  }

  setBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  delete(id) {
    this.venues = this.venues.filter((item) => {
      return item !== this.venues[id];
    });
    this.update();
  }

  clear() {
    this.venue = {
      name: '',
      image: '',
      location: '',
      capacity: '',
      parking: '',
      security: '',
      phone: '',
      website: '',
      food: '',
      notes: ''
    }
    this.editor.id = null;
  }

  edit(id) {
    this.venue = this.venues[id];
    if (!this.venue.notes) this.venue.notes = '';
    this.editor.id = id;
    window.scrollTo(0, 0);
  }

  alert() {
    var clear = setTimeout(() => {
      this.editor.error = '';
      this.editor.success = '';
      clearTimeout(clear);
    }, 5000);
  }

  update() {
    this.editor.warning = 'Working...';
    firebase.database().ref('venues').set(this.venues).then(() => {
      this.editor.warning = '';
      this.editor.success = 'Success!';
      this.alert();
    }).catch((msg) => {
      this.editor.warning = '';
      this.editor.error = msg;
      this.alert();
    });
  }

  post() {
    if (this.venue.name.length <= 0) {
      this.editor.warning = 'You forgot a name';
      this.alert();
    } else {
      if (this.editor.id) this.venues[this.editor.id] = this.venue;
      else this.venues.push(this.venue);
      this.update();
    }
  }

  ngOnInit() {
  }

}
