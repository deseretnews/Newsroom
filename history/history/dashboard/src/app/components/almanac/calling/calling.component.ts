import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Calling, Date } from '../../../models/almanac';
import { AlmanacService } from '../../../services/almanac.service';
import { environment } from '../../../../environments/environment';
import * as firebase from 'firebase';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.scss'],
  providers: [AlmanacService],
  host: {
    class: 'col-12'
  }
})

export class CallingComponent implements OnInit {

  @Input() uid: string;
  @Output() update = new EventEmitter();
  calling: Calling = new Calling();
  callings: Object = environment.almanac.callings;
  callingResults: Object = [];
  date = {
    start: {
      ui: '',
      fb: new Date()
    },
    end: {
      ui: '',
      fb: new Date()
    },
  }
  editor = {
    editing: false,
    key: null
  }

  constructor(private AlmanacService: AlmanacService) {
    this.findCalling();
  }

  getKeys(obj) {
    return Object.keys(obj);
  }

  reset() {
    this.calling = new Calling();
    this.editor.editing = false;
    this.date = {
      start: {
        ui: '',
        fb: new Date()
      },
      end: {
        ui: '',
        fb: new Date()
      },
    }
    this.findCalling();
  }

  dateFBExport(string) {
    const array = string.split('/');
    let date = new Date();
    date.month = parseInt(array[0]);
    date.day = parseInt(array[1]);
    date.year = parseInt(array[2]);
    return date;
  }

  dateToUID(string) {
    const array = string.split('/');
    string = parseInt(array[0] + array[1] + array[2]);
    return string;
  }

  add(uid) {
    if (!uid) {
      uid = this.AlmanacService.guid();
    }
    firebase.database().ref(`almanac/people/${this.uid}/`).once('value', (snapshot) => {
      if (snapshot.val()) {
        this.calling.people.push(this.uid);
      } else {
        this.calling.people = [];
      }
    }).then(() => {
      Promise.all([new Promise((res, rej) => {
        var dateUID = this.dateToUID(this.date.start.ui);
        if (this.date.start.ui && this.date.start.ui.length === 10) {
          this.date.start.fb = this.dateFBExport(this.date.start.ui);
          if (!environment.almanac.dates[dateUID]) {
            environment.almanac.dates[dateUID] = this.date.start.fb;
            environment.almanac.dates[dateUID].callings = [uid];
          } else if (environment.almanac.dates[dateUID].callings.indexOf(uid) === -1) {
            environment.almanac.dates[dateUID].callings.push(uid);
          }
          firebase.database().ref(`almanac/dates/${dateUID}/`).set(environment.almanac.dates[dateUID]).then(() => {
            this.calling.start = dateUID;
            res();
          })
        } else {
          res();
        }
      }), new Promise((res, rej) => {
        var dateUID = this.dateToUID(this.date.end.ui);
        if (this.date.end.ui && this.date.end.ui.length === 10) {
          this.date.end.fb = this.dateFBExport(this.date.end.ui);
          if (!environment.almanac.dates[dateUID]) {
            environment.almanac.dates[dateUID] = this.date.end.fb;
            environment.almanac.dates[dateUID].callings = [uid];
          } else if (environment.almanac.dates[dateUID].callings.indexOf(uid) === -1) {
            environment.almanac.dates[dateUID].callings.push(uid);
          }
          firebase.database().ref(`almanac/dates/${dateUID}/`).set(environment.almanac.dates[dateUID]).then(() => {
            this.calling.end = dateUID;
            res();
          })
        } else {
          res();
        }
      })]).then(() => {
        firebase.database().ref(`almanac/callings/${uid}/`).set(JSON.parse(JSON.stringify(this.calling))).then(() => {
          this.callings = environment.almanac.callings;
          this.findCalling();
          if (this.calling.people.length) {
            this.addCallingToPerson(uid);
          }
          this.reset();
        });
      });
    });
  }

  setUIDates(key) {
    var date = this.date[key].fb;
    this.date[key].ui = `${date.month}/${date.day}/${date.year}`;
  }

  edit(key) {
    this.editor.editing = true;
    this.editor.key = key;
    this.calling = this.AlmanacService.newObj(this.callings[key]);
    if (this.callings[key].start) {
      firebase.database().ref(`almanac/dates/${this.callings[key].start}/`).once('value', (snapshot) => {
        this.date.start.fb = snapshot.val();
        this.setUIDates('start');
      });
    }
    if (this.callings[key].end) {
      firebase.database().ref(`almanac/dates/${this.callings[key].end}/`).once('value', (snapshot) => {
        this.date.start.fb = snapshot.val();
        this.setUIDates('end');
      });
    }
  }

  delete(key) {
    const calling = this.callings[key],
      fb = firebase.database(),
      dates = ['start', 'end'];
    // remove calling ref from dates
    dates.forEach(string => {
      if (calling[string]) {
        fb.ref(`almanac/dates/${calling[string]}/`).once('value', (snapshot) => {
          let date = snapshot.val(),
            temp = [];
          date.callings.forEach(calling => {
            if (calling !== key) {
              temp.push(calling);
            }
          });
          date.callings = temp;
          fb.ref(`almanac/dates/${calling[string]}/`).set(date);
        });
      }
    });
    // remove calling from person
    if (calling.people) {
      calling.people.forEach(person => {
        var callings = [];
        environment.almanac.people[person].callings.forEach(callingKey => {
          if (callingKey !== key) {
            callings.push(callingKey);
          }
        });
        fb.ref(`almanac/people/${person}/callings/`).set(callings);
      });
    }
    // remove calling from fb
    fb.ref(`almanac/callings/${key}/`).remove().then(() => {
      this.reset();
    });
  }

  addCallingToPerson(key) {
    if (environment.almanac.people[this.uid]) {
      if (!environment.almanac.people[this.uid].callings) {
        environment.almanac.people[this.uid].callings = [key];
      } else if (environment.almanac.people[this.uid].callings.indexOf(key) === -1) {
        environment.almanac.people[this.uid].callings.push(key);
      } else {
        environment.almanac.people[this.uid].callings = [key];
      }
      var people = [];
      if (!environment.almanac.callings[key].people) {
        people = [this.uid];
      } else if (environment.almanac.callings[key].people.indexOf(this.uid) === -1) {
        people = environment.almanac.callings[key].people;
        people.push(this.uid);
      }
      firebase.database().ref(`almanac/people/${this.uid}/callings/`).set(environment.almanac.people[this.uid].callings).then(() => {
        console.log(people);
        firebase.database().ref(`almanac/callings/${key}/people/`).set(people);
        this.update.emit();
      });
    }
  }

  findCalling() {
    if (!this.editor.editing) {
      this.callings = environment.almanac.callings;
      this.callingResults = [];
      Object.keys(this.callings).forEach(calling => {
        if (this.callings[calling].name.toLowerCase().indexOf(this.calling.name.toLowerCase()) > -1 && Object.keys(this.callingResults).length < 10) {
          this.callingResults[calling] = this.callings[calling];
        }
      });
    }
  }

  formatDate(event, objKey) {
    if (event.keyCode !== 8 && this.date[objKey].ui && isFinite(event.key) && !isNaN(parseInt(event.key))) {
      if (this.date[objKey].ui.length === 2) this.date[objKey].ui += '/';
      if (this.date[objKey].ui.length === 5) this.date[objKey].ui += '/';
      if (this.date[objKey].ui.length > 9) this.date[objKey].ui = this.date[objKey].ui.substring(0, 10);
    } else if (event.keyCode !== 16 && event.keyCode !== 8) {
      this.date[objKey].ui = this.date[objKey].ui.substring(0, this.date[objKey].ui.length - 1)
    }
  }

  ngOnInit() {
  }

}
