import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Location, Country } from '../models/almanac';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';

@Injectable()
export class AlmanacService {

  section: string = 'person';

  constructor() { }

  // display
  getName = (uid) => { return this.newObj(environment.almanac.names[uid]) }
  getLocation = (uid) => { return this.newObj(environment.almanac.locations[uid]) }
  getState = (uid) => {
    const location: Location = this.getLocation(uid);
    if (!location.state) {
      return 'Not Set';
    } else {
      return this.newObj(environment.almanac.states[location.country][location.state]);
    }

  }
  getCountry = (uid) => { return environment.almanac.countries[uid] }
  getDate = (uid) => { return environment.almanac.dates[uid] }

  // obj requests
  getPeople = () => {
    let people = [];
    Object.keys(environment.almanac['people']).forEach(function (uid) {
      const person = environment.almanac.people[uid];
      person.uid = uid;
      people.push(person);
    });
    return people;
  }
  getCountries = () => {
    let array = [],
      unitedStates = {};
    Object.keys(environment.almanac.countries).forEach(function (uid) {
      const obj = environment.almanac.countries[uid];
      obj.uid = uid;
      if (obj.name === 'United States') {
        unitedStates = obj;
      }
      array.push(obj);
    });
    array.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    if (unitedStates) {
      array.unshift(unitedStates);
    }
    return this.newObj(array);
  }
  getStates = (uid) => {
    let array = [];
    if (environment.almanac.states[uid]) {
      Object.keys(environment.almanac.states[uid]).forEach(function (uid2) {
        let obj = {
          name: environment.almanac.states[uid][uid2],
          uid: uid2
        }
        array.push(obj);
      });
    }
    array.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    return this.newObj(array);
  }

  // build
  newObj = (obj) => { return JSON.parse(JSON.stringify(obj)) }
  capitalize = (string) => { return string.charAt(0).toUpperCase() + string.slice(1) }
  getKeys = (obj) => { return Object.keys(obj) }
  clear = () => { this[this.section] = this.newObj(this['new' + this.capitalize(this.section)]) }
  formatDate = (date) => { return date.month + '/' + date.day + '/' + date.year }
  compareObjs = (obj1, obj2) => {
    let test = true;
    Object.keys(obj1).forEach(key => {
      if (!obj1[key] || !obj2[key]) test = false;
      else if (obj1[key] !== obj2[key]) test = false;
    });
    return test;
  }

  // generate uid
  guid() {
    const s4 = () => { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
