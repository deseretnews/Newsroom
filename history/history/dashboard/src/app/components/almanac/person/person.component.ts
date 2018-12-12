import { Component, OnInit } from '@angular/core';
import { Person, Name, Location, Date } from '../../../models/almanac';
import { AlmanacService } from '../../../services/almanac.service';
import { environment } from '../../../../environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [AlmanacService]
})
export class PersonComponent implements OnInit {

  person = new Person();
  name: Name = new Name();
  birthDate: string;
  birthLocation: Location = new Location();
  deathDate: string;
  deathLocation: Location = new Location();
  callings = environment.almanac['callings'];
  uid: string = this.almanac.guid();
  people: Object = environment.almanac.people;
  countries: Array<Object> = this.almanac.getCountries();
  states = {
    birth: this.almanac.getStates(null),
    death: this.almanac.getStates(null)
  }
  error: string = '';

  constructor(private almanac: AlmanacService) { }

  edit(uid: string) {
    firebase.database().ref(`almanac/people/${uid}`).once('value').then((snapshot) => {
      this.clear();
      this.uid = uid;
      this.person = snapshot.val();
      this.name = this.almanac.getName(this.person.name);
      if (!this.person.photo) this.person.photo = '';
      if (this.person.birth.date) this.birthDate = this.almanac.formatDate(this.almanac.getDate(this.person.birth.date));
      else this.birthDate = '';
      if (this.person.birth.location) this.birthLocation = this.almanac.getLocation(this.person.birth.location);
      else this.birthLocation = new Location();
      if (this.person.death.date) this.deathDate = this.almanac.formatDate(this.almanac.getDate(this.person.death.date));
      else this.deathDate = '';
      if (this.person.death.location) this.deathLocation = this.almanac.getLocation(this.person.death.location);
      else this.deathLocation = new Location();
      this.updateStates();
    });
  }

  clear() {
    this.person = new Person();
    this.name = new Name();
    this.uid = this.almanac.guid();
    this.birthDate = '';
    this.birthLocation = new Location();
    this.deathDate = '';
    this.deathLocation = new Location();
  }

  validate() {
    var valid = true;
    if (!this.name.first || !this.name.first || !this.person.bio) valid = false;
    if (!this.name.first) this.error = 'Umm, looks like you forgot the first name...';
    else if (!this.name.last) this.error = 'So you got the first name but where\'s the last name?';
    else if (!this.person.bio) this.error = 'Please write a little bio for this person before you upload...';
    if (valid) {
      return true;
    } else {
      var message = setInterval(() => {
        this.error = '';
        clearInterval(message);
      }, 3000);
      return false;
    }
  }

  save() {
    // validate person form for db upload
    if (this.validate()) {
      // generate uids
      const uids = {
        person: this.uid,
        name: this.almanac.guid(),
        location: {
          birth: this.almanac.guid(),
          death: this.almanac.guid()
        }
      }
      // if no uid for name, create one
      if (!this.person.name) this.person.name = uids.name;
      // push name data to db
      this.name.person = uids.person;
      firebase.database().ref(`almanac/names/${this.person.name}`).set(this.name);
      // check birth & death location/date
      ['birth', 'death'].forEach(birthDeath => {
        const event = this.person[birthDeath];
        if (event) {
          ['date', 'location'].forEach(dateLocation => {
            const capitalizedKey = dateLocation.charAt(0).toUpperCase() + dateLocation.slice(1);
            const value = this[birthDeath + capitalizedKey];
            let valid = false;
            // make sure value is present
            for (var x in value) {
              if (value[x] && value[x].length > 0) {
                valid = true;
              }
            }
            // saving method for dates
            if (valid && dateLocation === 'date' && value.split('/').length === 3) {
              let date = value.split('/');
              const dateUID = parseInt(date[0] + date[1] + date[2]);
              this.person[birthDeath].date = dateUID;
              let obj = new Date();
              if (environment.almanac.dates[dateUID]) {
                obj = environment.almanac.dates[dateUID];
              }
              obj.month = parseInt(date[0]);
              obj.day = parseInt(date[1]);
              obj.year = parseInt(date[2]);
              if (obj.people[`${birthDeath}s`].indexOf(uids.person) === -1) {
                obj.people[`${birthDeath}s`].push(uids.person);
              }
              firebase.database().ref(`almanac/dates/${dateUID}`).set(obj);
            } else if (valid && dateLocation === 'location') {
              // saving method for locations
              let locationUID = uids.location[birthDeath];
              // update existing location
              if (this.person[birthDeath].location) {
                locationUID = this.person[birthDeath].location;
              }
              firebase.database().ref(`almanac/locations/${locationUID}`).set(this[`${birthDeath}Location`]);
              this.person[birthDeath].location = locationUID;
            }
          });
        }
      });
      // push or update person in db
      firebase.database().ref(`almanac/people/${uids.person}`).set(this.person);
      this.clear();
    }
  }

  formatDateInput(event, objKey) {
    if (event.keyCode !== 8 && this[objKey] && isFinite(event.key) && !isNaN(parseInt(event.key))) {
      if (this[objKey].length === 2) this[objKey] += '/';
      if (this[objKey].length === 5) this[objKey] += '/';
      if (this[objKey].length > 9) this[objKey] = this[objKey].substring(0, 10);
    } else if (event.keyCode !== 16 && event.keyCode !== 8) {
      this[objKey] = this[objKey].substring(0, this[objKey].length - 1)
    }
  }

  updateStates() {
    this.states.birth = this.almanac.getStates(this.birthLocation.country);
    this.states.death = this.almanac.getStates(this.deathLocation.country);
  }

  updateCallings() {
    this.callings = environment.almanac['callings'];
    let person = environment.almanac.people[this.uid];
    if (person) {
      this.person.callings = person.callings;
    }
  }

  ngOnInit() {
  }

}
